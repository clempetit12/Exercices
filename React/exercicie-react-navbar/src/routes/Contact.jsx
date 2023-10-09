const Contact = () => {
    return(
<>
<h1>Contacts</h1>
<hr />
<form action="" >
    <div className="row-col-5 mb-2 p-2">
    
    <input type="text" placeholder="Firstname" />
    </div>
    <div  className="row-col-5 mb-2 p-2">
    
    <input type="text" placeholder="Lastname" />
    </div>
    <div  className="row-col-5 mb-2 p-2">
    
    <input className="text-append" type="text"  placeholder="Email"/>
    </div>
    <button className="btn btn-light">Envoyer</button>

</form>
</>
    )
}

export default Contact