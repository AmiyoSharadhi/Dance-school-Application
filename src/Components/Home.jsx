
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../Help/AxiosInstance';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Components/Home.css";


const Home = () => {


  
  let token=localStorage.getItem('token');
  console.log(token);
  let {id}=useParams()
 


    let [state , setSate]=useState([])

    useEffect(()=>{
    let fetchData=async()=>{
    try{
         let {data}=await axiosInstance.get(`/branches/getall`,{headers: {Authorization:`Bearer ${token}`}})
         let finalData=data.data
        //  console.log(finalData);
         setSate(finalData)
    }
    catch{
          console.log("Unable to get Data from Academy");
    }
    }
  fetchData();
   })
   


   useEffect(()=>{
    let fetchUserId=async()=>{
    try{
         let {data}=await axiosInstance.get(`/users/getall`,{headers: {Authorization:`Bearer ${token}`}})
         let finalData=data.data
         console.log(finalData);
         {finalData.map((x)=>{
          return(
            localStorage.setItem(`uid`,`${x.id}`)
          )
         })}
    }
    catch{
          console.log("Unable to get Data from Academy");
    }
    }
  fetchUserId();
   })

   

  let navigate = useNavigate();

  let Togallery = () => {
    navigate("/gallery");
  }



let handleSetId=(bid)=>{
  localStorage.setItem('bid',`${bid}`)
  console.log(bid)
}



  return (
    <>
      <div className="section-1">
        <img src="https://wallpapercave.com/wp/JvCoA3p.jpg" alt="" />
      </div>
      <div className="section-2">
        <h1>Express Yourself Through Amogh</h1>
        <p>
          Experience the beauty of Bharathanatyam and the thrill of Bollywood
          dance at our New Jersey locations.
        </p>
        <button className="viewGallery-btn" onClick={Togallery}>
          View Gallery  <i class="fa-sharp fa-solid fa-angle-right"></i>{" "}
        </button>
      </div>




      <h2 className='viewAcademyHed' style={{textAlign:'center', marginTop:'20px'}}>Total Number of Branches are : <span id="countNum">{state.length}</span></h2>
 <div className='ViewAcademy_main'>
 <h1>Choose your best Branch According </h1>
   {state.map((x)=>{
   
     return(
       <div className="ViewAcademy_sub">
         <h3>ADDRESS : <span>{x.address}</span></h3>
         <h3>CITY : <span>{x.city}</span></h3>
         <h3>PHONE: <span>{x.phone}</span></h3>
         <h3>PINCODE: <span>{x.pincode}</span></h3>
         <button type="button" class="btn btn-info" onClick={()=>{handleSetId(x.id)}}><Link className="view_btnL" to={`/viewCourseById/${x.id}`}>View</Link></button>
       </div>
     )
   })}
 </div>

         <div className="why-to-choose-head">
        <div className='why-to-choose'>
          <h1 style={{textAlign:'center', marginTop:100, color:'white'}}>Why Choose Pranavam School Of Dance</h1>
          <h4 style={{textAlign:'center', marginTop:30,color:'white'}}>10 life skills we teach through dance.</h4> <br /> <br />
          <img src="https://www.pranavamschoolofdance.com/wp-content/uploads/2020/08/10Core.png" alt="" />

        </div>

        </div>
        
        




    </>
  );
};

export default Home;
