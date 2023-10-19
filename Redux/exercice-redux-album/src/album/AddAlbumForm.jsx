import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteAlbums, editAlbums, postAlbums, setFormMode } from "./albumSlice"
import { useNavigate } from "react-router-dom"

const AddAlbumForm = () => {

    const titleRef = useRef()
    const releaseDateRef = useRef()
    const artistRef = useRef()
    const scoreRef = useRef()
    const coverurlRef = useRef()
    const token = localStorage.getItem("token")
    const formMode = useSelector(state => state.albums.formMode)
    const selectedAlbum = useSelector(state => state.albums.selectedAlbum)


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const releaseDate = releaseDateRef.current.value
        const artist = artistRef.current.value
        const score = scoreRef.current.value
        const coverUrl = coverurlRef.current.value
        const newAlbum = { title, releaseDate, artist, score, coverUrl }
        if (formMode === "add") {
            console.log("add");

    
            console.log(newAlbum);
            dispatch(postAlbums(newAlbum, token))

        } else if (formMode === "delete") {
            console.log("delete");
            console.log("selectedalbumdelete" + selectedAlbum);
            dispatch(deleteAlbums(selectedAlbum))
            dispatch(setFormMode(""))

        } else if (formMode === "edit") {
            console.log("edit")
            console.log("selectedalbum" +selectedAlbum);
            dispatch(editAlbums({id: selectedAlbum.id,...newAlbum}))
        
            dispatch(setFormMode(""))
        }

    }




    return (
        <>

            <h1>{formMode === "add" ? <p>Add a card</p> : formMode === "delete" ? <p>Delete a card</p> : <p>Edit a card</p>}</h1>
            <hr />
            <form action="" onSubmit={submitHandler} >
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" class="form-control" placeholder="title" aria-label="title" aria-describedby="basic-addon1" ref={titleRef} defaultValue={selectedAlbum?.title} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Release Date</span>
                    <input type="text" class="form-control" placeholder="releaseDate" aria-label="releaseDate" aria-describedby="basic-addon1" ref={releaseDateRef} defaultValue={selectedAlbum?.releaseDate} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Artist</span>
                    <input type="text" class="form-control" placeholder="artist" aria-label="artist" aria-describedby="basic-addon1" ref={artistRef} defaultValue={selectedAlbum?.artist} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Score</span>
                    <input type="text" class="form-control" placeholder="score" aria-label="score" aria-describedby="basic-addon1" ref={scoreRef} defaultValue={selectedAlbum?.score} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">CoverUrl</span>
                    <input type="text" class="form-control" placeholder="coverUrl" aria-label="coverUrl" aria-describedby="basic-addon1" ref={coverurlRef} defaultValue={selectedAlbum?.coverUrl} />
                </div>
                <h1>{formMode === "add" ? <button className="btn btn-success" >Add a card</button> : formMode === "delete" ? <button className="btn btn-danger">Delete a card</button> : <button className="btn btn-warning" >Edit a card</button>}</h1>
            </form>

        </>
    )
}


export default AddAlbumForm