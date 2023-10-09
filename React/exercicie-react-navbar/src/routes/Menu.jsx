import { NavLink, Outlet } from "react-router-dom";


const Menu = () => {
    return(
<>
<h1>Mon Menu</h1>
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
<NavLink class="navbar-toggler navbar-brand" type="button" data-toggle="collapse"><i class="bi bi-list"></i></NavLink>

<NavLink className="navbar-brand" to="/contact">Contact</NavLink>
<NavLink className="navbar-brand" to="/projets">Projets</NavLink>
<NavLink className="navbar-brand" to="/about">About</NavLink>
      
</nav>
<Outlet />
  

    
</>
    )
}

export default Menu