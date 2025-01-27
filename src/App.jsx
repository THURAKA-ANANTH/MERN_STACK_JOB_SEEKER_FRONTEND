import React,{useEffect,useContext} from 'react'
import { Context } from './main'
import "./App.css";
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
 import Home from './components/Home/Home'
 import JobDetails from './components/Job/JobDetails'
 import Jobs from './components/Job/Jobs'
 import MyJobs from './components/Job/MyJobs'
 import PostJobs from './components/Job/PostJobs'
 import Application  from './components/Application/Application'
 import MyApplications from './components/Application/MyApplications'
 import NotFound from './components/NotFound/NotFound'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
const App = () => {

const {isAuthorized,setIsAuthorized,setUser} = useContext(Context);
useEffect(()=>{
  const fetchUser=async()=>{
    try{
      const response = await axios.get("http://localhost:4000/api/v1/user/getuser",{withCredentials:true})
      setUser(response.data.user);
      setIsAuthorized(true);
      


    }
    catch(error){
      setIsAuthorized(false);
    }
  };
  fetchUser();

},[isAuthorized])




  return <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/job/getall" element={<Jobs/>}/>
      <Route path="job/:id" element={<JobDetails/>}/>
      <Route path="/application/:id" element={<Application/>}/>
      <Route path="application/me" element={<MyApplications/>}/>
      <Route path="/job/post" element={<PostJobs/>}/>
      <Route path="job/me" element={<MyJobs/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <Toaster/>
   

  </Router>
   


   </>
  
};

export default App