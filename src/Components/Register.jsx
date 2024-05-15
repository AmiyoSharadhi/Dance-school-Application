import React from 'react'
import "../Components/Register.css"
import { useState } from 'react';
import axiosInstance from "../Help/AxiosInstance"
import{toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import See from "../Assets/See.mp4"
import { Navigate } from 'react-router-dom';

const Register = () => {

 
  let [data,setData]=useState({
    userName:"",
    email:"",
    password:"",
    phone: "",
    dob:"",
    gender:""
  });

  let {userName,email,password,dob,phone,gender} =data

 let handledata=(e)=>{
  let name=e.target.name
  let value=e.target.value
  setData({...data,[name]:value})
 }

let handlesubmit= async (e)=>{
  e.preventDefault();
  console.log(data);
try{
  let payload={
    userName,
    email,
    password,
    phone,
    dob,
    gender
  }
  let final_data=await axiosInstance.post("/users/save",payload)
  console.log(final_data);
  toast.success("Successfully registered with email")
  Navigate('/login')

}
 catch{
    alert("not able to register");
  }

}

  return (
  <>
  <div className="See_video">
  <video autoPlay loop className="See_video" >
    <source src={See} type="video/mp4"/>
    </video>
    </div>
  <div className="Main" >
    <form action="" onSubmit={handlesubmit}>
  <div className="Sub"  >
    <h2>REGISTER FORM</h2>  <br />
              <pre> <label htmlFor="proname">Username   </label> 
                        <input type="text"  id="proname" name="userName"  value={userName} onChange={handledata} /><i id="user_icon" class="fa-solid fa-user"></i> <br /> <br />  </pre> 
                        <pre>  <label htmlFor="proprice">Email     </label>
                <input type="email"  id="proprice" name="email" value={email} onChange={handledata}/> <i id="mail_icon"  class="fa-solid fa-envelope"></i><br /> <br />  </pre> 
              <pre> <label htmlFor="propclr">Password   </label>
                <input type="password"  name="password" value={password} onChange={handledata}/> <i  id="pass_icon" class="fa-solid fa-lock"></i> <br /> <br />  </pre> 
                <pre>   <label htmlFor="proqty">Phone    </label>
                <input type="number"  id="proqty" name="phone" value={phone} onChange={handledata}/> <i id="phone_icon" class="fa-solid fa-mobile"></i> <br /> <br /> </pre> 
              <pre><label htmlFor="dob">Birth date  </label>
                <input type="date" id="dob" name="dob" value={dob} onChange={handledata}/> <i id="dob_icon" class="fa-solid fa-calendar"></i> <br /> <br /> </pre>
                <label htmlFor="">Gender :</label>
                <input type="radio" className='rbtn' name="gender" value="male" id="radio1" onChange={handledata}/>
                <label htmlFor="radio1">Male</label>
                <input type="radio" className='rbtn' name="gender" value="female" id="radio2" onChange={handledata}/>
                <label htmlFor="radio2">Female</label><br /> <br />
                 <button id= "btn1" >Submit</button>
                <button className='btn'>Cancel</button>
  </div>
  </form>
  </div>
 
  </>
  )
}

export default Register
