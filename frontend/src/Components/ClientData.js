import React, { useEffect, useState } from "react";
import "./ClientData.css";
import axios from "axios";
const ClientData = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:4000/clientdata")
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  //DELETE QUERY 

  const deleteHandler =(id)=>{
 alert("successfully deleted")
    axios.delete('http://localhost:4000/deleteuser/'+id)
    window.location.reload()                                //reload page
  }
  return (
    <>

      <h1 className="clientdata-head">Client Details</h1>
      <table className="main-table">
        <tr className="table-data">
          <th className="table-header">S.No</th>
          <th className="table-header">Name</th>
          <th className="table-header">E-mail</th>
          <th className="table-header">PhoneNumber</th>
          <th className="table-header">Location</th>
          <th className="table-header">HowKnow</th>
          <th className="table-header">Gender</th>
          <th className="table-header">Delete</th>

        </tr>
        {data.map((each, index) => {
          return (
            <tr className="tabledata-details">
              <td className="table-header">{index + 1}</td>
              <td className="table-header" key={each.id}>
                {each.name}
              </td>
              <td className="table-header" key={each.id}>
                {each.email}
              </td>
              <td className="table-header" key={each.id}>
                {each.phonenumber}
              </td>
              <td className="table-header" key={each.id}>
                {each.location}
              </td>
              <td className="table-header" key={each.id}>
                {each.howknow}
              </td>
              <td className="table-header" key={each.id}>
                {each.gender}
              </td>
              <td className="table-header"><button onClick={()=>deleteHandler(each.id)} className="delete-button" >Delete</button></td>
            </tr>
          );
        })}
      </table>
    </>
  );
};



export default ClientData;
