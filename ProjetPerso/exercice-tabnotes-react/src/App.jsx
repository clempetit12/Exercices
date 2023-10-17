import { NavLink, Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <header>

        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body p-2 " data-bs-theme="dark">
          <NavLink to={"/"} className="navbar-brand" >
            <i class="bi bi-house-heart display-6"></i>  Home

          </NavLink >

          <NavLink className="navbar-brand" to="/addnote" >
            Ajouter note
          </NavLink>
          <NavLink className="navbar-brand" to="/addstudent" >
            Ajouter élève
          </NavLink>
          <NavLink className="navbar-brand" to="/addmater" >
            Ajouter maière
          </NavLink>

        </nav>
      </header>
      <main>
        <Outlet />
        </main>
      </>



      );
}

      export default App;
