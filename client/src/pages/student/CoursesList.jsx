import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import SearcheBar from '../../components/students/SearcheBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/students/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/students/Footer'

const CoursesList = () => {

  const {navigate, allCourses, categories} = useContext(AppContext)
  const {input} = useParams()
  const [filteredCourses, setFilteredCourses] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    if(allCourses && allCourses.length > 0 ){
      let tempCourse = allCourses.slice()
      if (input) {
        tempCourse = tempCourse.filter(
          item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
        )
      }
      if (selectedCategory) {
        tempCourse = tempCourse.filter(
          item => item.category === selectedCategory
        )
      }
      setFilteredCourses(tempCourse)
    }
  }, [allCourses, input, selectedCategory])
  return (
      <>
        <div className='relative md:px-36 px-8 pt-20 text-left'>
          <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
            <div>
              <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'>
              <span className='text-blue-600 cursor-pointer'
              onClick={()=>navigate('/')}>Home </span>/ <span>Course List</span>
            </p>
            </div>
            <SearcheBar data={input} />
          </div>
          {
            input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
              <p>{input}</p>
              <img src={assets.cross_icon} alt='' className='cursor-pointer' 
              onClick={()=>navigate('/course-list')}/>
            </div>
          }
          <div className='flex flex-wrap gap-2 mt-8'>
            <button
              className={`px-3 py-1 rounded border ${selectedCategory === '' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedCategory('')}
            >
              Toutes les catégories
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`px-3 py-1 rounded border ${selectedCategory === cat.name ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          my-16 gap-3 px-2 md:p-0'>
            {
              filteredCourses.map((course, index)=>(
                <CourseCard key={index} course={course} />
            ))
            }
          </div>
        </div>
        <Footer />
      </>
  )
}

export default CoursesList
