import { useDispatch, useSelector } from "react-redux";
import { removeUser, setAuthMode } from "../auth/authSlice";
import Modal from "./Modal";
import SignForm from "../auth/SignForm";
import { useEffect, useRef } from "react";
import { fetchAlbums, setFilteredAlbum } from "../album/albumSlice";
import { NavLink, useNavigate } from "react-router-dom";
import AlbumDisplay from "../album/AlbumDisplay";

const NavBar = () => {
    const user = useSelector(state => state.auth.user)
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()
    const searchRef = useRef()
    const album = useSelector(state => state.albums.albums)
    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        const search = searchRef.current.value
        console.log(search);
        dispatch(setFilteredAlbum(search))
      


    }
    const home = () => {
        dispatch(setFilteredAlbum(null))
        dispatch(fetchAlbums(album))
        searchRef.current.value=" "
   
    }


    return (
        <>
            {
                authMode && (
                    <Modal onClose={() => dispatch(setAuthMode(""))}>
                        <SignForm />
                    </Modal>
                )
            }

            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand"><i className="bi bi-globe"  ></i>eAlbum</span>
                    <button className="btn "onClick={() => home}>Home</button>



                </div>
                <form class="form-inline m-4" onSubmit={submitHandler}>
                    <div className="input-group mb-3">

                        <input class="form-control mr-2 " type="search" placeholder="Search" ref={searchRef} aria-label="Search" button />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  >Search</button>

                    </div>

                </form>
                <button
                    onClick={() => !user ? dispatch(setAuthMode("Se connecter")) : dispatch(removeUser())}
                    className=" btn btn-info"
                >
                    {user ? "Déconnexion" : "Se connecter"}
                </button>
            </nav>
        </>
    );
}

export default NavBar;