import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import OneUser from '../components/OneUser';
import Posts from '../components/Posts';

const UserDetails = () => {
    const [user,setUser] = useState({});
    const [loadUser,setLoadUser] = useState(true);
    const [posts,setPosts] =useState([]);
    const [loadPosts,setLoadPosts] = useState(true)
    const {id} = useParams();

    const getUser = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            setUser(res.data)
            setLoadUser(false)
        })
        .catch((err)=>console.log(err))
    }

    const getPosts = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((res)=>{
            setPosts(res.data)
            setLoadPosts(false)
        }).catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getUser()
        getPosts()

        // eslint-disable-next-line
    },[])

  return (
    <div>
        <OneUser user={user} loadUser={loadUser} />
        <Posts posts={posts} loadPosts={loadPosts} />
    </div>
  )
}

export default UserDetails