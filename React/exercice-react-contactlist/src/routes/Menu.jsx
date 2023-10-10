import { NavLink, Outlet } from "react-router-dom";
import { MyContactContextProvider } from "../Context/ContactContext";


const Menu = () => {
  return (
    <>
<MyContactContextProvider>

<header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <NavLink
            class="navbar-toggler navbar-brand"
            type="button"
            data-toggle="collapse"
            to="/"
          >
            <i class="bi bi-list navbar-brand "></i> Accueil 
          </NavLink>
          <NavLink className="navbar-brand" to="/contacts">
            Contact
          </NavLink>
        </nav>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
</MyContactContextProvider>


    
    </>
  );
};

export default Menu