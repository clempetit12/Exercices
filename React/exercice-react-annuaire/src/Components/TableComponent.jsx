
const TableComponent = (props) => {
    const { tables } = props


    return (
        <>
            {((tables == [])) ?
                <p>Il n'y a personne dans la base de données</p> :
<div className="container">
                <table className="table">
                    <thead>
                    <th>Index</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </thead>
                    <tbody>
                        {tables.map((person, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{person.firstname}</td>
                                <td>{person.lastname}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                </div>


            }</>)
}



export default TableComponent