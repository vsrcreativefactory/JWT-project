import {Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {isAuthenticated} = useSelector(state => state.user)

    const authlinks = (
        <>
            <li className="nav-item me-3">
                <NavLink className="nav-link d-flex align-items-center" to='/dashboard'>
              Dashboard
                </NavLink>
            </li>
            <li className="nav-item me-3">
                <NavLink className="nav-link d-flex align-items-center" to='/'>
              LogOut
                </NavLink>
            {/* {isAuthenticated ? authlinks : guestLinks} */}
            </li>
        </>
    )
    const guestLinks = (
        <>
            <li className="nav-item me-3">
            <NavLink className="nav-link d-flex align-items-center" to='/register'>
              Registration
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link d-flex align-items-center" to='/login'>
              LogIn
            </NavLink>
          </li>
        </>
    )
return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* Container wrapper */}
    <div className="container">
    <NavLink className='navbar-brand' to='/' style={{ paddingRight: '80px' }}>
            <img 
                src='https://img.icons8.com/?size=100&id=67473&format=png&color=FFFFFF' 
                alt='Home Icon' 
                style={{ height: '38px' }}  // Adjust the height as needed
            /> Home
        </NavLink>
        <img
          id="MDB-logo"
          src="https://img.icons8.com/?size=100&id=80774&format=png&color=000000"
          alt="MDB Logo"
          draggable="false"
          height="30"
        />

      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left links */}
        <ul className="navbar-nav me-3">
        </ul>
        {/* Left links */}

        <form className="d-flex align-items-center w-100 form-search">
          <div className="input-group">
            <button
              className="btn btn-light dropdown-toggle shadow-0"
              type="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
              style={{ paddingBottom: '0.4rem' }}
            >
              All
            </button>
            <ul className="dropdown-menu dropdown-menu-dark fa-ul">
              <li>
                <a className="dropdown-item" href="#">
                  <span className="fa-li pe-2">
                    <i className="fas fa-search"></i>
                  </span>
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="fa-li pe-2">
                    <i className="fas fa-film"></i>
                  </span>
                  Titles
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="fa-li pe-2">
                    <i className="fas fa-tv"></i>
                  </span>
                  TV Episodes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="fa-li pe-2">
                    <i className="fas fa-user-friends"></i>
                  </span>
                  Celebs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="fa-li pe-2">
                    <i className="fas fa-building"></i>
                  </span>
                  Companies
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="fa-li pe-2">
                    <i className="fas fa-key"></i>
                  </span>
                  Keywords
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="fa-li pe-2">
                    <i className="fas fa-search-plus"></i>
                  </span>
                  Advanced search
                  <i className="fas fa-chevron-right ps-2"></i>
                </a>
              </li>
            </ul>
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <a href="#!" className="text-white">
            <i className="fas fa-search ps-3"></i>
          </a>
        </form>

        <ul className="navbar-nav ms-3">
        {/* <li className="nav-item me-3">
            <NavLink className="nav-link d-flex align-items-center" to='/dashboard'>
              Dashboard
            </NavLink>
          </li> */}
          {/* <li className="nav-item me-3">
            <NavLink className="nav-link d-flex align-items-center" to='/register'>
              Registration
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link d-flex align-items-center" to='/login'>
              LogIn
            </NavLink>
          </li> */}
          {isAuthenticated ? authlinks : guestLinks}
          
        </ul>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
);
}

export default Navbar;
