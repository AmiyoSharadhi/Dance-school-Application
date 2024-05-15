import React from 'react'
import Home from "../Components/Home"
import Nav from "../Components/Nav"
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Gallery from './Gallery';
import About from './About.jsx';
import Login from './Login.jsx';
import Register from './Register';
import AdminRegister from "../Admins/AdminRegister.jsx"
import { ToastContainer} from 'react-toastify';
import ProtectedRoute from '../ServiceRoutes/ProtectedRoute.jsx';
import AdminDashboard from '../Admins/AdminDashboard.jsx';
import AcademymanegerRegister from '../Admins/AcademymanegerRegister.jsx';
import ViewAcademyManager from './../Admins/ViewAcademyManager';
import ViewAcademy from "./../Admins/ViewAcademy.jsx"
import ViewBranch from './../Admins/ViewBranch';
import ViewCourse from './../Admins/ViewCourse';
import ViewAcademyEachmanager from '../Admins/ViewAcademyEachmanager.jsx';
import UpdateManager from '../Admins/UpdateManager.jsx';
import AddAcademyName from '../Admins/AddAcademyName.jsx';
import UpdateAcademy from '../Admins/UpdateAcademy.jsx';
import AddBranch from '../Admins/AddBranch.jsx';
import UpdateBranch from './../Admins/UpdateBranch';
import AddCourse from '../Admins/AddCourse.jsx';
import UpdateCourse from '../Admins/UpdateCourse.jsx';
import ViewCoursebyBranches from './ViewCoursebyBranches.jsx';
import UserRegister from '../UsersModule/UserRegister.jsx';






const App = () => {
  return (
    <>
    <Router>
        <Nav/>
        <ToastContainer />
        <Routes>
            <Route path="/" element={ <ProtectedRoute><Home/></ProtectedRoute>  } />
            <Route path="/about" element={<About/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            
            <Route path='/adminregister' element={<AdminRegister/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}>

            <Route path="/admindashboard/addAcademyManager" element={<AcademymanegerRegister/>} />
            <Route path="/admindashboard/viewacademymanager" element={<ViewAcademyManager/>} />

            <Route path="/admindashboard/viewacademymanager/viewacademyEachmanager/:id" element={<ViewAcademyEachmanager/>} />
            <Route path="/admindashboard/viewacademymanager/updateManager/:id" element={<UpdateManager/>} />
            <Route path="/admindashboard/viewacademymanager/addAcademyName/:id" element={<AddAcademyName/>} />

            <Route path="/admindashboard/viewacademy" element={<ViewAcademy/>} />
            <Route path="/admindashboard/viewacademy/updateAcademy/:id" element={<UpdateAcademy/>} />
            <Route path="/admindashboard/viewacademy/addBranch/:id" element={<AddBranch/>} />


            <Route path="/admindashboard/viewbranch" element={<ViewBranch/>} />
            <Route path="/admindashboard/viewbranch/updateBranch/:id" element={<UpdateBranch/>} />
            <Route path="/admindashboard/viewbranch/addCourse/:id" element={<AddCourse/>} />


            <Route path="/admindashboard/viewcourse" element={<ViewCourse/>} />
            <Route path="/admindashboard/viewcourse/updateCourses/:id" element={<UpdateCourse/>} />

            </Route>
            
            <Route path="/viewCourseById/:id" element={<ViewCoursebyBranches/>} />

                {/* UserModule Data */}

            <Route path="/viewCourseById/:id/createMembership" element={<UserRegister/>} />



        </Routes>
    </Router>
    
    </>
  )
}

export default App
