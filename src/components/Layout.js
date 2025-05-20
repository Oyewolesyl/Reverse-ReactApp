import { Link, useLocation } from "react-router-dom"

const Layout = ({ children, showHeader = true, showNav = true, logoOnly = false }) => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className="mobile-container">
      {showHeader && (
        <header className="header">
          <div className="logo">
            <img src={require("../assets/Vector.svg") || "/placeholder.svg"} alt="Logo" />
          </div>
          {!logoOnly && (
            <button className="menu-button">
              <img src={require("../assets/menu_24px.svg") || "/placeholder.svg"} width="32" height="32" alt="Menu" />
            </button>
          )}
        </header>
      )}

      <main className="main-content">{children}</main>

      {showNav && (
        <nav className="bottom-nav">
          <Link to="/" className={`nav-item ${path === "/" ? "active" : ""}`}>
            <img
              src={
                path === "/" ? require("../assets/home-icon-active- (1).svg") : require("../assets/homeinactive.svg")
              }
              width="32"
              height="32"
              alt=""
            />
            <span>Home</span>
          </Link>
          <Link to="/manual" className={`nav-item ${path === "/manual" ? "active" : ""}`}>
            <img
              src={
                path === "/manual"
                  ? require("../assets/justRecycle logo altactive (1).svg")
                  : require("../assets/recyclenav.svg")
              }
              width="32"
              height="32"
              alt=""
            />
            <span>Recycle</span>
          </Link>
          <Link to="#" className="nav-item">
            <img src={require("../assets/explore_24px.svg") || "/placeholder.svg"} width="32" height="32" alt="" />
            <span>Discover</span>
          </Link>
          <Link to="/profile" className={`nav-item ${path === "/profile" ? "active" : ""}`}>
            <img
              src={path === "/profile" ? require("../assets/profile-active.svg") : require("../assets/profile.svg")}
              width="32"
              height="32"
              alt=""
            />
            <span>Profile</span>
          </Link>
        </nav>
      )}
    </div>
  )
}

export default Layout
