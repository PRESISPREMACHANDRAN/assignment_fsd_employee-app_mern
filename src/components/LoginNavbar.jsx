import React from 'react'

const LoginNavbar = () => {
  return (
    <div>
    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-start">
        <button class="btn btn-outline-success me-2" type="button">
          <a class="nav-link" href="/adminlogin">
            Admin Login
          </a>
        </button>
        <button class="btn btn-sm btn-outline-secondary" type="button">
          <a class="nav-link" href="/userlogin">
            User Login
          </a>
        </button>
      </form>
    </nav>
  </div>
  )
}

export default LoginNavbar