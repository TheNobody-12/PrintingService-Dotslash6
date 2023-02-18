import React, { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <section className="navbar-area navbar-five">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="javascript:void(0)">
                  <img src="../assets/images/white-logo.svg" alt="Logo" />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarFive"
                  aria-controls="navbarFive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarFive"
                >
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a
                        className="page-scroll active"
                        data-bs-toggle="collapse"
                        data-bs-target="#sub-nav15"
                        aria-controls="sub-nav15"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="javascript:void(0)"
                      >
                        Home
                      </a>
                      <ul className="sub-menu collapse" id="sub-nav15">
                        <li>
                          <a href="javascript:void(0)">Business Home</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Corporate Home</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Consulting Home</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Services</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Blogs</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
