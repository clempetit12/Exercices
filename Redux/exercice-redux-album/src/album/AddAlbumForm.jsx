import { useRef } from "react"

const AddAlbumForm = () => {

    const titleRef = useRef()
    const releaseDateRef = useRef()
    const artistRef = useRef()
    const scoreRef = useRef()
    const coverurlRef = useRef()


    const submitHandler = (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const releaseDate = releaseDateRef.current.value
        const artist = artistRef.current.value
        const score = scoreRef.current.value
        const coverUrl = coverurlRef.current.value
        const newAlbum = { title, releaseDate, artist, score, coverUrl }

    }
    return (
        <>
            <h1>Add a card</h1>
            <hr />
            <form action="" onSubmit={submitHandler}>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" class="form-control" placeholder="title" aria-label="title" aria-describedby="basic-addon1" ref={titleRef} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Release Date</span>
                    <input type="text" class="form-control" placeholder="releaseDate" aria-label="releaseDate" aria-describedby="basic-addon1" ref={releaseDateRef} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Artist</span>
                    <input type="text" class="form-control" placeholder="artist" aria-label="artist" aria-describedby="basic-addon1" ref={artistRef} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Score</span>
                    <input type="text" class="form-control" placeholder="score" aria-label="score" aria-describedby="basic-addon1" ref={scoreRef} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">CoverUrl</span>
                    <input type="text" class="form-control" placeholder="coverUrl" aria-label="coverUrl" aria-describedby="basic-addon1" ref={coverurlRef} />
                </div>
                <button className="btn btn-danger">Add</button>
            </form>

        </>
    )
}

export default AddAlbumForm