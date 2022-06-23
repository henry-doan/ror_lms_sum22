import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const UserShow = () => {
  const { id } = useParams()
  const [user, setUser] = useState({ first: '', last: '', image: '' })
  const { first, last, image } = user 
  const [userCourses, setUserCourses] = useState([])

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => {
        setUser(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/users/${id}/userCourses`)
      .then( res => setUserCourses(res.data))
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>{first} {last}</h1>
      <img 
        src={image}
        alt="profile"
        width='300px'
      />
      <button>Edit</button>
      <button>Delete</button>
      <br />
      { userCourses.map( uc => 
        <div>
          <h1>{uc.title}</h1>
          <p>{uc.desc}</p>
          <p>{uc.cType}</p>
        </div> 
      )}
    </>
  )
}

export default UserShow;