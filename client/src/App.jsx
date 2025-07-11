import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CoursDetail from './pages/student/CoursDetail'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/students/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrollments from './pages/educator/StudentsEnrollments'
import Navbar from './components/students/Navbar'
import "quill/dist/quill.snow.css"
import DashboardAdmin from './pages/admin/DashboardAdmin'
import UsersAdmin from './pages/admin/UsersAdmin'
import CoursesAdmin from './pages/admin/CoursesAdmin'
import StatsAdmin from './pages/admin/StatsAdmin'
import CategoriesAdmin from './pages/admin/CategoriesAdmin'

const App = () => {

  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CoursDetail />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        <Route path='/educator' element={<Educator />} >
          <Route path='/educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />  
          <Route path='my-courses' element={<MyCourses />} />  
          <Route path='student-enrolled' element={<StudentsEnrollments />} />  
        </Route>

        {/* Routes admin */}
        <Route path='/admin' element={<DashboardAdmin />}>
          <Route path='users' element={<UsersAdmin />} />
          <Route path='courses' element={<CoursesAdmin />} />
          <Route path='stats' element={<StatsAdmin />} />
          <Route path='categories' element={<CategoriesAdmin />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
