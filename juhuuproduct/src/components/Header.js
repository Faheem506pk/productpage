import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
        
        
  <header className="d-flex fixed-top align-items-center justify-content-between px-4">
    <div className="brand-nav">
      <a href="/" className="brand">
        <img src="assets/images/juhuu_logo.webp" alt="logo" />
      </a>
    </div>
    <div className="main-menu">
      <ul className="nav">
        <li className="nav-item"><Link to="/" className="nav-link Responsive-li"> <span className="icon"> <i className="bi bi-archive" /> </span>{" "} Wartehallen </Link></li>        
        <li className="nav-item">
          <Link to="Product_overview_page"className="nav-link Responsive-li"style={{ color: "#CD2B23" }}><span className="icon"><i className="bi bi-p-square" /></span>{" "}Radparksysteme</Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link Responsive-li">
            <span className="icon">
              <i className="bi bi-lock" />
            </span>
            Zugangssysteme
          </a>
        </li>
      </ul>
    </div>
    <div className="main-menu full-main-menu">
      <ul className="nav">
        <li className="nav-item">
          <a href="#" className="nav-link Responsive-li">
            <span className="icon">
              <i className="bi bi-journal-bookmark active" />
            </span>{" "}
            Bookmarks
          </a>
        </li>
        <li className="nav-item"> <a href="#" className="nav-link Responsive-li"><span className="icon"> <i className="bi bi-search active " /> </span>{" "} Search</a> </li>
        <li className="nav-item">
          <a
            href="#offcanvasMenu"
            data-bs-toggle="offcanvas"
            className="nav-link"
          >
            <span className="icon">
              <i className="bi bi-list active" />
            </span>{" "}
            menu
          </a>
        </li>
      </ul>
    </div>
  </header>
        </>
    );
}