import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";


const AppContext = createContext();

export default AppContext;

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate()
    const [allCourses, setAllCourses] = useState([])
    const [isEducator,setIsEducator] = useState(true)
    const [enrolledCourses,setEnrolledCourses] = useState([])
    const [categories, setCategories] = useState([
        { id: 1, name: 'Développement' },
        { id: 2, name: 'Design' },
        { id: 3, name: 'Marketing' },
        { id: 4, name: 'Cybersécurité' },
        { id: 5, name: 'Python' },
    ]);

    const calculateRating = (course) => {
        if(course.courseRatings.length === 0) return 0;
        let totalRating = 0;
        course.courseRatings.forEach((rating) => {
            totalRating += rating.rating;
        });
        return totalRating / course.courseRatings.length;
    }

    // calculate course chapiter time 

    const calculateChapiterTime = (chapiter) => {
        let time = 0
        chapiter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']})
    }

    const calculateCourseDuration = (course) => {
        let time = 0
        course.courseContent.map((chapiter) => chapiter.chapterContent.map((lecture) => 
            time += lecture.lectureDuration
    ))
      return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']})  
    }

    // calculate to No of Lecture

    const calculateNoOfLecture = (course) => {
        
        let totalLectures = 0;

        course.courseContent.forEach(chapiter => {
            if(Array.isArray(chapiter.chapterContent)){
                totalLectures += chapiter.chapterContent.length
            }
        })
        return totalLectures;
    }

    // fetch enrolled courses 

    const fetchEnrolledCourses = async () => {
        setEnrolledCourses(dummyCourses)
    }

    useEffect(() => {
        fetchEnrolledCourses(),
        fetchEnrolledCourses()
    }, [])

    // fetch all courses 

    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    useEffect(() => {
        fetchAllCourses()
    }, [])


    const value = {
        currency, allCourses, navigate, calculateRating,
        isEducator, setIsEducator, calculateChapiterTime,
        calculateCourseDuration, calculateNoOfLecture, enrolledCourses,
         fetchEnrolledCourses,
         categories, setCategories
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

//