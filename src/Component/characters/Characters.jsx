import React, { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link,useParams } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
function Characters() {
  const [ people, setPeople ] = useState([]);
  console.log('people',people)
  const [currentPage, setCurrentPage] = useState(1);
  const [ pageSize ] = useState(2);
  const { name } = useParams();
  console.log('name',name)// Set the number of rows per page
//  const navigate=useNavigate()
  useEffect(() => {
    fetchPeople(currentPage).then((data) => setPeople(data.results));
  }, [currentPage]);

  const fetchPeople = async (page) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    return data;
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) =>
      direction === "prev" ? prevPage - 1 : prevPage + 1
    );
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <>
      <div className="container" style={{ minHeight: "100%" }}>
        <div className="row">
          <div className="company-header">
            <div className="col-md-12">
              <h1>Star Wars People</h1>
              <table className="table table-bordered border-primary">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {people.slice(startIndex, endIndex).map((person, index) => (
                    <tr key={index}>
                      <th>{startIndex + index + 1}</th>
                      <td>{person.name}</td>
                      <td>{person.height}</td>
                      <td>
                        <div>
                          <Link to={`https://swapi.dev/api/people/${index+1}`}>
                            <VisibilityIcon />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br />
              <button
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
              >
                <ArrowBackIosNewOutlinedIcon />
              </button>
              <span>Page {currentPage}</span>
              <button onClick={() => handlePageChange("next")}>
                <ArrowForwardIosOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Characters;
