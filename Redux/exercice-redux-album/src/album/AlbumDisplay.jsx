import { useDispatch, useSelector } from "react-redux"
import styles from "./Album.module.css"
import { deleteAlbums, setFormMode, setSelectedAlbum } from "./albumSlice"
import { useNavigate } from "react-router-dom"

const AlbumDisplay = (props) => {


    const album = props.album
    const dispatch = useDispatch()
    const selectedAlbum = useSelector(state => state.albums.selectedAlbum)
    const navigate = useNavigate()

    const deleteHandler = () => {
     
        
        dispatch(setSelectedAlbum(album))

        dispatch(setFormMode("delete"))
        navigate("/addAlbumForm")
        
        
    }
    const editHandler = () => {
     
        dispatch(setSelectedAlbum(album))

        dispatch(setFormMode("edit"))
        navigate("/addAlbumForm")
     
    }
    return (

        <div classNameName={`card-deck ${styles.card}`}  >
            <div className="card">
                <div className="card-header">
                    <img src={album.coverUrl} alt="Card image cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{album.title}</h5>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{album.artist}</li>
                        <li className="list-group-item">{album.releaseDate}</li>
                        <li className="list-group-item">{album.score}</li>
                        <li className="list-group-item">{album.price}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <div className="d-flex">
                        <div><button className="btn btn-danger ms-auto" onClick={() => editHandler()}>Edit</button></div>
                        <div><button className="btn btn-warning ml-3" onClick={() => deleteHandler()}>Delete</button></div>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default AlbumDisplay

