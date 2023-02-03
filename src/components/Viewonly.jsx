import React, { useEffect, useState } from "react";
import axios from "axios";

const Viewonly = () => {
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
        <div>
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">

          <button class="btn btn-sm btn-outline-secondary" type="button">
            <a class="nav-link" href="/">
              Logout
            </a>
          </button>
        </form>
      </nav>
    </div>
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
                      </tr>
                    </thead>
                    {Employeelist.map((value, index) => {
                      return (
                        <tbody className="table-group-divider">
                          <tr>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
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
  

export default Viewonly