import { NavLink, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <h1>Mon Menu</h1>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <NavLink
            class="navbar-toggler navbar-brand"
            type="button"
            data-toggle="collapse"
            to="/"
          >
            <i class="bi bi-list navbar-brand"></i>
          </NavLink>
          <NavLink className="navbar-brand" to="/contact">
            Contact
          </NavLink>
          <NavLink className="navbar-brand" to="/projets">
            Projets
          </NavLink>
          <NavLink className="navbar-brand" to="/about">
            About
          </NavLink>
        </nav>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Menu;
