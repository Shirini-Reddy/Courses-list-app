import React, { useState, useEffect } from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';
import HomePage from './Header';
function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/courses');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div>
      <HomePage/>
    </div>
    <div className='app'>
      
        {courses.map(course => (
          <div key={course.id} className='course'>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Author: {course.author}</p>
            <center><Link to="/enquire" className="btn btn-primary">
                     {course.enquiry}
                    </Link></center> 
          </div>
        ))}
     
    </div>
    </>
  );
}

export default CourseList;
