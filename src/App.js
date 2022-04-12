import React,{useState,useEffect} from "react";
import {Routes,Route} from "react-router-dom";
import axios from "axios";
import './App.css';
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";




function App() {

  const [users,setUsers] =useState([])
  const [loadUsers, setLoadUsers] = useState(true)

  const getUsers = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      setUsers(res.data)
      setLoadUsers(false)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
   <div>
     <Routes>
        <Route path="/"  element={<Home users={users}  loadUsers={loadUsers} /> }/>
        <Route path="/user/:id" element={<UserDetails />} />
     </Routes>
   </div>
  );
}

export default App;
