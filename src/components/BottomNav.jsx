import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${path === "/" ? "active" : ""}`}>
        <img
          src={path === "/" ? "/assets/home-icon-active- (1).svg" : "/assets/homeinactive.svg"}
          width="32"
          height="32"
          alt=""
        />
        <span>Home</span>
      </Link>
      <Link to="/manual" className={`nav-item ${path === "/manual" ? "active" : ""}`}>
        <img
          src={path === "/manual" ? "/assets/justRecycle logo altactive (1).svg" : "/assets/recyclenav.svg"}
          width="32"
          height="32"
          alt=""
        />
        <span>Recycle</span>
      </Link>
      <Link to="#" className="nav-item">
        <img src="/assets/explore_24px.svg" width="32" height="32" alt="" />
        <span>Discover</span>
      </Link>
      <Link to="/profile" className={`nav-item ${path === "/profile" ? "active" : ""}`}>
        <img
          src={path === "/profile" ? "/assets/profile-active.svg" : "/assets/profile.svg"}
          width="32"
          height="32"
          alt=""
        />
        <span>Profile</span>
      </Link>
    </nav>
  );
};