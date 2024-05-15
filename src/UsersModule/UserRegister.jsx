import React from 'react'
import { useState } from 'react';
import axiosInstance from "../Help/AxiosInstance"
import{toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import See from "../Assets/See.mp4"
import "../UsersModule/UserModule.css"
import { useParams } from 'react-router-dom';

const UserRegister = () => {

   let token=localStorage.getItem(`token`);
   let uid=localStorage.getItem(`uid`);
   let bid=localStorage.getItem(`bid`);
   let cid=localStorage.getItem(`cid`);
   console.log(uid, bid, cid)

  let {id}=useParams()

  let [data,setData]=useState({
    dateOfJoining:"",
    memeberShipEndDate:"",
    Status: "",
    totalFee:""
    
  });

  let {dateOfJoining,memeberShipEndDate,Status,totalFee} =data

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
    dateOfJoining,
    memeberShipEndDate,
    Status,
    totalFee
  }
  
  let final_data=await axiosInstance.post(`/memberships/createmembership?branchId=${bid}&danceCourseId=${cid}&userId=${uid}`,payload,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  toast.success("Successfully registered with email")
  alert('succesfully regustered members')
  console.log(final_data)
  toast.success("Successfully regist")

}
 catch{
    alert("not able to register");
  }

}



  return (
  <>


<div className="loginBg">
  <video autoPlay loop className="See_video" >
    <source src={See} /> 
  </video>
</div>
  <div className="Main_userRegister" >
    <form action="" onSubmit={handlesubmit}>
  <div className="Sub_userRegister"  >
    <h2>User Membeeship form</h2>  <br />
              <pre> <label htmlFor="dateOfJoining">dateOfJoining  </label> 
                        <input type="date"  id="dateOfJoining" name="dateOfJoining"  value={dateOfJoining} onChange={handledata} /> <br /> <br />  </pre> 
              <pre> <label htmlFor="memeberShipEndDate">memeberShipEndDate   </label>
                <input type="date"  name="memeberShipEndDate" value={memeberShipEndDate} onChange={handledata}/>  <br /> <br />  </pre> 
                <pre>   <label htmlFor="Status ">Status   </label>
                <input type="text"  id="Status " name="Status" value={Status} onChange={handledata}/> <br /> <br /> </pre> 
              <pre><label htmlFor="totalFee">totalFee  </label>
                <input type="number" id="totalFee" name="totalFee" value={totalFee} onChange={handledata}/> <br /> <br /> </pre>
                 <button id= "btn1" >Submit</button>
                <button className='btn'>Cancel</button>
  </div>
  </form>
  </div>
 
  </>
  )
}

export default UserRegister
