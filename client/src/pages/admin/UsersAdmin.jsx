import React, { useState } from 'react';

const UsersAdmin = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Dupont', email: 'alice@email.com', status: 'actif' },
    { id: 2, name: 'Bob Martin', email: 'bob@email.com', status: 'inactif' },
    { id: 3, name: 'Chloé Bernard', email: 'chloe@email.com', status: 'actif' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', email: '', status: 'actif' });
  const [editId, setEditId] = useState(null);
  const [editUser, setEditUser] = useState({ name: '', email: '', status: 'actif' });

  const handleAdd = () => {
    if (!newUser.name.trim() || !newUser.email.trim()) return;
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setNewUser({ name: '', email: '', status: 'actif' });
  };

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setEditUser({ name: user.name, email: user.email, status: user.status });
  };

  const handleEditSave = () => {
    setUsers(users.map(u => u.id === editId ? { ...u, ...editUser } : u));
    setEditId(null);
    setEditUser({ name: '', email: '', status: 'actif' });
  };

  const handleStatusToggle = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'actif' ? 'inactif' : 'actif' } : u));
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Gestion des utilisateurs</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Nom"
          className="border rounded px-2 py-1"
        />
        <input
          type="email"
          value={newUser.email}
          onChange={e => setNewUser({ ...newUser, email: e.target.value })}
          placeholder="Email"
          className="border rounded px-2 py-1"
        />
        <select
          value={newUser.status}
          onChange={e => setNewUser({ ...newUser, status: e.target.value })}
          className="border rounded px-2 py-1"
        >
          <option value="actif">Actif</option>
          <option value="inactif">Inactif</option>
        </select>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-1 rounded">Ajouter</button>
      </div>
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Statut</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              {editId === user.id ? (
                <>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={editUser.name}
                      onChange={e => setEditUser({ ...editUser, name: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="email"
                      value={editUser.email}
                      onChange={e => setEditUser({ ...editUser, email: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="border p-2">
                    <select
                      value={editUser.status}
                      onChange={e => setEditUser({ ...editUser, status: e.target.value })}
                      className="border rounded px-2 py-1"
                    >
                      <option value="actif">Actif</option>
                      <option value="inactif">Inactif</option>
                    </select>
                  </td>
                  <td className="border p-2">
                    <button onClick={handleEditSave} className="bg-green-600 text-white px-2 py-1 rounded mr-2">Enregistrer</button>
                    <button onClick={() => setEditId(null)} className="bg-gray-400 text-white px-2 py-1 rounded">Annuler</button>
                  </td>
                </>
              ) : (
                <>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">
                    <span className={`px-2 py-1 rounded text-white ${user.status === 'actif' ? 'bg-green-500' : 'bg-red-500'}`}>{user.status}</span>
                    <button onClick={() => handleStatusToggle(user.id)} className="ml-2 text-xs underline text-blue-600">Changer</button>
                  </td>
                  <td className="border p-2">
                    <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Éditer</button>
                    <button onClick={() => handleDelete(user.id)} className="bg-red-600 text-white px-2 py-1 rounded">Supprimer</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersAdmin; 