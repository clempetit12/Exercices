import logo from './logo.svg';
import styles from './App.css';
import classes from '../src/Pokedex/pokedex.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokedex, setClearMonPokedex, setSelectedPokemon } from './Pokedex/pokedexSlice';
import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PokeDisplay from './Pokedex/PokeDisplay';
import Modal from './Modal/Modal';

function App() {

  const dispatch = useDispatch()
  const pokedex = useSelector(state => state.pokedex.pokedex)
  const monPokedex = useSelector(state => state.pokedex.monPokedex)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    console.log('"modal');
    setIsModalOpen(true)
    console.table();


  }
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const clear = () => {
    dispatch(setSelectedPokemon(null))
   dispatch(setClearMonPokedex([]))
  }

  useEffect(() => {
    dispatch(fetchPokedex())
    console.table(pokedex);
  }, [])


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <NavLink to={"/pokelist"} aria-current="page" className="nav-link active "> <span className="navbar-brand"><img src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C
3%A9mon_logo.svg'/></span></NavLink>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink to={"https://www.pokemon.com/fr/"} aria-current="page" className="nav-link active ">Home</NavLink>

                </li>



              </ul>
              <ul className="navbar-nav mx-auto"> {/* Utilisation de mx-auto pour centrer le contenu */}
                <li className="nav-item">
                  <span className="nav-link active text-center">Mon Pokedex</span>
                </li>
              </ul>
              <form className="d-flex mb-3" role="search">


                <img className={styles.pokeball} src='https://files.cults3d.com/uploaders/25311742/illustration-file/46bd4e93-86f8-4f0d-aa99-8a916dc15429/WhatsApp-Image-2023-03-16-at-18.03.55.jpeg' onClick={() => openModal()} />
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-light">Ma PokeBall</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      {monPokedex.map((poke, index) =><div className="card row m-3" key={index}><div className='col-3 text-light'><img src={poke.sprites.front_shiny}/></div>
                      <div className='col-3 text-light'><span>Name</span><div>{poke.name}</div></div>
                      <div className='col-3 text-light'><span>Height</span><div>{poke.height}</div></div>
                      <div className='col-3 text-light'><span>Weight</span><div>{poke.weight}</div></div>
                      </div>)}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
                <span className="nav-item text-light m-2">{monPokedex.length}</span>




                <button class="btn btn-danger" onClick={() => clear} type="submit">x Clear</button>
                <button class="btn btn-primary" type="submit">Show</button>

              </form>
            </div>



        



        </div>
      </nav >

    </header >

      <main className='container'>



        <Outlet />
      </main>

    </>
  );

}

export default App;
