import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../Help/AxiosInstance';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewCoursebyBranches = () => {

  let token=localStorage.getItem('token');
  console.log(token);
  let {id}=useParams()
  console.log(id);



    let [state , setSate]=useState([])

    useEffect(()=>{
    let featchData=async()=>{
    try{
         let {data}=await axiosInstance.get(`/dancecourses/getbybranchid/${id}`,{headers: {Authorization:`Bearer ${token}`}})
         let finalData=data.data
         console.log(finalData);
         setSate(finalData)
    }
    catch{
          console.log("Unable to get Data from Academy");
    }
  }
  featchData();
},[])

let handleCid=(cid)=>{
localStorage.setItem(`cid`,`${cid}`);
alert(cid)


}

  return (
    <>
    <h2 className='viewAcademyHed' style={{textAlign:'center', marginTop:'20px'}}>Total Number of Courses are : <span id="countNum">{state.length}</span></h2>
    <div className='ViewAcademy_main'>
      {state.map((x)=>{
        return(
          <div className="ViewAcademy_sub">
            <h3>Courses Duration  : <span>{x.courseDurationInMonths}</span></h3>
            <h3>Fees : <span>{x.fee}</span></h3>
            <h3>Img Data : <span>{x.imageData}</span></h3>
            <h3>Course Type : <span>{x.type}</span></h3>

            <button type="button" class="btn btn-success"  onClick={()=>{handleCid(x.id)}}><Link className="view_btnL" to={`/viewCourseById/:id/createMembership`}>Register</Link> </button>
          </div>
        )
      })} 
    </div>
    </>
  )
}

export default ViewCoursebyBranches
