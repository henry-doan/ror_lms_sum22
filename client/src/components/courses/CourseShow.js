import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CourseShow = () => {
  const { id } = useParams()
  const [course, setCourse] = useState({ title: '', desc: '', ctype: '' })
  const { title, desc, ctype} = course

  useEffect( () => {
    axios.get(`/api/courses/${id}`)
      .then( res => setCourse(res.data) )
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>Course Title: {title}</h1>
      <h4>Course Type: {desc}</h4>
      <p>Course Description: {ctype}</p>
      <button>Edit</button>
      <Link
        to={`/${id}/enrollments`}
        state={
          { courseTitle: title }
        }
      >
        <button>
          Enrollments
        </button>
      </Link>
      <button>Delete</button>
    </>
  )
}

export default CourseShow;