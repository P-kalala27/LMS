import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/AppContext';

const CoursesAdmin = () => {
  const { allCourses, categories } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(allCourses.map(c => ({ ...c })));
  }, [allCourses]);

  useEffect(() => {
    let tempCourses = courses.slice();
    if (selectedCategory) {
      tempCourses = tempCourses.filter(course => course.category === selectedCategory);
    }
    setFilteredCourses(tempCourses);
  }, [courses, selectedCategory]);

  const handleTogglePublish = (id) => {
    setCourses(courses.map(course =>
      course._id === id ? { ...course, isPublished: !course.isPublished } : course
    ));
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course._id !== id));
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Gestion des cours</h1>
      <div className="flex gap-2 mb-4">
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
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Titre</th>
            <th className="p-2 border">Catégorie</th>
            <th className="p-2 border">Prix</th>
            <th className="p-2 border">Statut</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map(course => (
            <tr key={course._id}>
              <td className="border p-2">{course.courseTitle}</td>
              <td className="border p-2">{course.category || <span className="text-gray-400">Non défini</span>}</td>
              <td className="border p-2">{course.coursePrice} €</td>
              <td className="border p-2">{course.isPublished ? 'Publié' : 'Non publié'}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => handleTogglePublish(course._id)}
                  className={`px-2 py-1 rounded ${course.isPublished ? 'bg-yellow-500' : 'bg-green-600'} text-white`}
                >
                  {course.isPublished ? 'Dépublier' : 'Publier'}
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="px-2 py-1 rounded bg-red-600 text-white"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesAdmin; 