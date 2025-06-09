import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardAdmin = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-8">Admin</h2>
        <nav className="flex flex-col gap-4">
          <Link to="users" className="hover:bg-blue-700 p-2 rounded">Utilisateurs</Link>
          <Link to="courses" className="hover:bg-blue-700 p-2 rounded">Cours</Link>
          <Link to="stats" className="hover:bg-blue-700 p-2 rounded">Statistiques</Link>
          <Link to="categories" className="hover:bg-blue-700 p-2 rounded">Catégories</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardAdmin; 