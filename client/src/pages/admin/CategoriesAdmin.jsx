import React, { useState } from 'react';

const CategoriesAdmin = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Développement' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Marketing' },
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAdd = () => {
    if (newCategory.trim() === '') return;
    setCategories([...categories, { id: Date.now(), name: newCategory }]);
    setNewCategory('');
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditValue(name);
  };

  const handleEditSave = () => {
    setCategories(categories.map(cat => cat.id === editId ? { ...cat, name: editValue } : cat));
    setEditId(null);
    setEditValue('');
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Gestion des catégories</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={e => setNewCategory(e.target.value)}
          placeholder="Nouvelle catégorie"
          className="border rounded px-2 py-1"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-1 rounded">Ajouter</button>
      </div>
      <ul className="divide-y">
        {categories.map(cat => (
          <li key={cat.id} className="flex items-center justify-between py-2">
            {editId === cat.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="border rounded px-2 py-1 mr-2"
                />
                <button onClick={handleEditSave} className="bg-green-600 text-white px-2 py-1 rounded mr-2">Enregistrer</button>
                <button onClick={() => setEditId(null)} className="bg-gray-400 text-white px-2 py-1 rounded">Annuler</button>
              </>
            ) : (
              <>
                <span>{cat.name}</span>
                <div>
                  <button onClick={() => handleEdit(cat.id, cat.name)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Éditer</button>
                  <button onClick={() => handleDelete(cat.id)} className="bg-red-600 text-white px-2 py-1 rounded">Supprimer</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesAdmin; 