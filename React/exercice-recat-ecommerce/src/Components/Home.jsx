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
      <h1>La cave des Merveilles </h1>
      <hr />
      <h2>Les articles disponibles</h2>
      <ul>
       
{Array.isArray(itemList) ? itemList.map((item, index) => (
  <div key={index}>{item.title}  <Link to={`details/${item.id}`}> Détails </Link></div>
)) : null}

      </ul>
      <Link to={"/formauth"}>Administrateur</Link>





    </>


  )
}

export default Home