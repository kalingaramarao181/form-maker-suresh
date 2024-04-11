import React,{useState} from "react";
import "./ClientLogin.css";
import axios from 'axios'

const ClientLogin = () => {
  const[data,setData]=useState({
    name:"",
    email:"",
    phonenumber:"",
    location:"",
    howknow:""
  })

  const{name,email,phonenumber,location,howknow}=data

const handlesubmit =(e)=>{
  setData({...data,[e.target.name]:e.target.value}, {gender: gender})
}

const [gender, setGender] = useState("") //for radio buttons
data.gender = gender

  const handileGender =(e)=>{
    setGender(e.target.value)
 
      }
       const submithandler =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/clientform",{...data})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
        alert("successfully submited")

       setData({
    name:"",
    email:"",
    phonenumber:"",
    location:"",
    howknow:""
       })

       }

  return (
    <>
    <form onSubmit={submithandler} >
      <div className="client-main-container"  >
        <div className="client-main-card"  >
         
          <h1 className="client-signupform-heading">CLIENT-SIGNUP</h1>
          <label className="client-labeltag">Full Name</label>
          <input type="text"  placeholder="Enter Your FullName" className="client-main-input-text" name="name" value={name} onChange={handlesubmit} required
          />
          <label className="client-labeltag">E-Mail</label>
          <input    type="email"  placeholder="Enter Your E-mail"   className="client-main-input-text" name="email" value={email} onChange={handlesubmit} required
          />
          <label className="client-labeltag">PhoneNumber</label>
          <input type="number"  placeholder="Enter Your Phonenumber"   className="client-main-input-text" name="phonenumber" value={phonenumber} onChange={handlesubmit} required
          />{" "}
          <label className="client-labeltag">Location</label>
          <input
            type="text"  placeholder="Enter Your Location"   className="client-main-input-text" name="location" value={location} onChange={handlesubmit} required
          />{" "} 
          <label className="client-labeltag">how do you know about this </label>
          <select className="client-main-input-text-droupdown" name="howknow" value={howknow} onChange={handlesubmit}  >
          <option >select </option>
            <option >linkedin </option>
            <option>facebook </option>
            <option>twitter </option>
            <option>instagram </option>
            <option>others</option>
          </select>
          <label className="client-labeltag">Gender</label>
          <div className="client-radio-buttons">
            <div>
              <input type="radio" value="Male" name="gender" id="gender" onChange={handileGender} />
              <label className="client-labeltag" htmlFor="gender">
                Male
              </label>
            </div>
            <div>
              <input type="radio" value="Female" name="gender" id="gender2" onChange={handileGender} />
              <label className="client-labeltag" htmlFor="gender2">
                Female
              </label>
            </div>
          </div>
          <button type="submit" className="client-main-input-text-submit">submit</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default ClientLogin;
