import React from 'react'
import LoginNavbar from './LoginNavbar'
const AdminLogin = () => {
  return (
    <div>
      <LoginNavbar/>
      <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <form style={{
                                        backgroundColor: "#e6e6e6",
                                        border: "solid 2px black",
                                        borderRadius: "20px !important",
                                        paddingTop: "20px",
                                        paddingBottom: "40px",
                                        paddingLeft: "20px",
                                        paddingRight: "20px",
                                        marginTop: "20px"
                                      }}>
                            <h2  style={{
                                textAlign: "center",
                                textDecoration: "underline",
                                fontStyle: "italic",
                              }}  >Admin Login</h2>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                            </form>
                          </div>
                     </div>
                </div>
            </div>
        </div>
       </div>
  )
}

export default AdminLogin