// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import  "./navbar.css"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg vw-100">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav col-9"  >  
        <a className="nav-link col-3 text-white" href="/dashboard" style={{ marginLeft:100 }}>Dashboard</a>
        <a className="nav-link disabled col-3 text-grey" href="/booking" style={{ marginLeft:100 }}>Booking</a>
        <a className="nav-link col-3 text-white" href="/form" style={{ marginLeft:100 }}>Log In</a>
      </div>
    </div>
  </div>
</nav>
    // <nav className="navbar vw-100 top-0" style={{ backgroundColor: "#e3f2fd" }}>
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       Pages
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarText"
    //       aria-controls="navbarText"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarText">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/dashboard">
    //             Dashboard
    //           </Link>
    //         </li>
    //         {/* <li className="nav-item">
    //           <Link className="nav-link" to="/booking">
    //             Booking
    //           </Link>
    //         </li> */}
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/form">
    //             Login
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
