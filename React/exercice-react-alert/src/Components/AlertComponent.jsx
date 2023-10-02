const BoutonAlert = (props ) => {
    let couleurBouton = props.couleurBouton
    let iconeClasse = props.iconeClasse
 return (
    <>
    <div className="container">
    <div className={"alert" + " " + "alert-"+couleurBouton} ><i className = {iconeClasse}></i> A simple <b>{couleurBouton}</b> alert - check it out !</div>
    </div>
 </>

 );
}

export default BoutonAlert