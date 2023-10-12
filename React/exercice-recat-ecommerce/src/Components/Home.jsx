import { useContext, useEffect } from "react"
import axios from "axios"
import ItemContext from "../Context/ItemContext"
import { Link, useNavigate } from "react-router-dom"



function Home() {

  const { itemList, setItemList } = useContext(ItemContext)


  useEffect(() => {
    axios.get("http://localhost:4444/items")
      .then(response => {
        console.log(response.data)
        setItemList(prev => [...response.data]) 
        localStorage.setItem("items", JSON.stringify(response.data))

      })
      .catch(error => {

        console.error("Erreur :", error)
      })
  }, [setItemList])

console.log(itemList);

  return (
    <>
      <h1 className="text-center display-4 p-2" >La cave des Merveilles </h1>
      <hr />
      <h2 className="display-5" >Les articles disponibles</h2>
       
{Array.isArray(itemList) ? itemList.map((item, index) => (<div className="card p-2 mb-3"  key={index}> <div className="row"><div className="col-6"><img   style={{ width: '100%', height: 'auto' }} classname="img-fluid"  src={item.url} alt="Card image cap"></img></div>
<div className="col-6">
<div className="card-body">
    <h5 className="card-title text-center display-6">{item.title}</h5>
    <div className="text-center">
    <Link className="mt-5 btn btn-outline-dark btn-lg" type="button" to={`details/${item.id}`}> Détails </Link>
    </div>
 
     
      </div>
</div>
</div> 
  
 
    </div>
)) : null}


    </>


  )
}

export default Home