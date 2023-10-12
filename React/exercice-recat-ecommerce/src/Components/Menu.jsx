import { NavLink, Outlet } from "react-router-dom";


const Menu = () => {
  return (
    <>
<header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <NavLink
            class="navbar-toggler navbar-brand"
            type="button"
            data-toggle="collapse"
            to="/"
          >
            <i class="bi bi-list navbar-brand "></i> Ajouter des articles 
          </NavLink>
          <NavLink className="navbar-brand" to="/basket">
            Panier
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

export default Menu