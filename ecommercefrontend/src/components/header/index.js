import './css/styles.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (

    <body id="page-top">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand text-danger" to="/">AniMates</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              {/* <li className="nav-item"><Link className="nav-link" to="home">Home</Link></li> */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Men's T-Shirts</Link></li>
                  <li><Link className="dropdown-item" to="#">Women's T-Shirts</Link></li>
                  <li><Link className="dropdown-item" to="#">AnimeCon</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  {/* <!-- <li><a className="dropdown-item" href="#">Something else here</a></li> --> */}
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="#portfolio">Portfolio</Link></li>
              
              <li className="nav-item"><Link className="nav-link" to="#about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#team">Team</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link></li>
              <li className="nav-item right-cta-menu text-right d-flex
                        aligin-items-center col-6 ">
                 <Link className="nav-link" to="registration"><button className="btn btn-outline-success border-width-2 d-lg-inline-block text-white ">Register Now</button></Link>
                 
                 <Link className="nav-link" to="login"><button className="btn btn-outline-danger border-width-2 
                                d-lg-inline-block text-white ">Log In</button></Link>
              </li>
              

            </ul>
          </div>
          {/* <div className="right-cta-menu text-right d-flex
                        aligin-items-center justify-content-end col-6">
                    <div className="ml-auto">
                        
                        
                    </div>
                    <a href="#" className="site-menu-toggle js-menu-toggle
                            d-inline-block d-xl-none mt-lg-2 ml-3"><span
                                className="icon-menu h3 m-0 p-0 mt-2"></span></a>
                </div> */}
        </div>
      </nav>
      
    </body>

  );
}

export default Header;
