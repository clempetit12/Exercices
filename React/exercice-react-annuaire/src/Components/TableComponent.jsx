
const TableComponent = (props) => {
    let tables = props

       console.log("hello");
return ( 
<>
{(tables = [] )? 
    <p>Il n'y a personne dans la base de données</p> :

    <table className="table">
       <thead>
        <th>Firstname</th>
        <th>Lastname</th>
       </thead>
       <tbody>
       {tables.map((table,i)=> <tr key={i}>
        <td>{table.firstname}</td>
        <td>{table.lastname}</td>
       </tr>)}
       </tbody>

    </table>



}</>)
}



export default TableComponent