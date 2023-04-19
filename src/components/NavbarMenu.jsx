import React from "react";

export const NavbarMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 border-bottom fixed-top border-secondary">
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="#">
          AI BASED <span className="text-primary fw-bold fs-2">OCR</span>{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
            <li className="nav-item">
              <a
                className="nav-link active text-primary"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/templates/Login.html">
                    Sign-in
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Sign_up.html">
                    New User? Sign-Up
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="index.html">
                    Guest
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#OurServices">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about_US">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
