import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Home = () => {
  const [Employeelist, setEmployeelist] = useState([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setEmployeelist(response.data);
      })
      .catch();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-4">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h2
                  style={{
                    textAlign: "center",
                    textDecoration: "underline",
                    fontStyle: "italic",
                  }}
                >
                  Employee data
                </h2>
                <table
                  class="table table-success table-striped  table-hover"
                  style={{
                    border: "solid 2px black",
                    borderRadius: "20px !important",
                  }}
                >
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  {Employeelist.map((value, index) => {
                    return (
                      <tbody className="table-group-divider">
                        <tr>
                          <th scope="row">{value.id}</th>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                          <td><div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Edit
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Update</a></li>
                          <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div></td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
