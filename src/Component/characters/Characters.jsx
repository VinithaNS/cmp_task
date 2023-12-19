import React, { useState, useEffect } from "react";

function Characters() {
    // const [ data, setData ] = useState([]);
    // console.log('data',data)
    // useEffect(() => {
    //     fetch('https://swapi.dev/api/people/')
    //         .then(response => response.json())
    //     .then(data=>setData(data))
    // })
     const [people, setPeople] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);

     useEffect(() => {
       fetchPeople(currentPage).then((data) => setPeople(data.results));
     }, [currentPage]);

     const fetchPeople = async (page) => {
       const response = await fetch(
         `https://swapi.dev/api/people/?page=${page}`
       );
       const data = await response.json();
       return data;
     };
   
  
  return (
    <>
      <div className="container" style={{ minHeight: "100%" }}>
        <div className="row">
          <div className="company-header">
            <div className="col-md-6">
              <h1>Star Wars People</h1>
              <table class="table table-bordered border-primary">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Hair Color</th>
                    <th>Weight</th>
                    <th>Skin Color</th>
                    <th>Eye Color</th>
                   </tr>
                </thead>
                <tbody>
                  {people.map((person, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{person.name}</td>
                      <td>{person.height}</td>
                      <td>{person.hair_color}</td>
                      <td>{person.mass}</td>
                      <td>{person.skin_color}</td>
                      <td>{person.eye_color}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <button onClick={() => handlePageChange("prev")}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange("next")}>Next</button> */}
    </>
  );
}

export default Characters
