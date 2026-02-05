import React, { useState } from 'react';

const Tables = ({ data, onDelete, onAdd }) => {
  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (newName.trim() === "") return;
    onAdd(newName);
    setNewName("");
  };

  return (
    <section className="ml-0 lg:ml-72 mt-8 bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 mx-4 lg:mr-6 lg:mx-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
        <h6 className="font-bold text-slate-700">Authors Table</h6>
        <div className="flex gap-2 w-full sm:w-auto">
          <input 
            type="text" 
            placeholder="New Author Name..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-teal-400 flex-1 sm:flex-initial sm:w-auto"
          />
          <button 
            onClick={handleAdd}
            className="bg-teal-400 text-white text-xs px-4 py-2 rounded-xl font-bold hover:bg-teal-500 transition-colors whitespace-nowrap"
          >
            Add New
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[10px] uppercase text-gray-400 border-b border-gray-50 tracking-widest">
              <th className="pb-3 text-left pl-2">Author</th>
              <th className="pb-3 text-left">Function</th>
              <th className="pb-3 text-right pr-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
                <td className="py-4 pl-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-400 text-white flex items-center justify-center font-bold">
                    {user.name ? user.name.charAt(0) : "?"}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-700">{user.name}</span>
                    <span className="text-xs text-gray-400">{user.email || 'no-email@test.com'}</span>
                  </div>
                </td>
                <td className="py-4 text-xs font-bold text-slate-600">Developer</td>
                <td className="py-4 text-right pr-4">
                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-400 hover:text-red-600 font-bold text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-3">
        {data.map((user) => (
          <div key={user.id} className="border border-gray-100 rounded-2xl p-4 hover:bg-gray-50/50 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-teal-400 text-white flex items-center justify-center font-bold text-lg shrink-0">
                {user.name ? user.name.charAt(0) : "?"}
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-bold text-slate-700 truncate">{user.name}</span>
                <span className="text-xs text-gray-400 truncate">{user.email || 'no-email@test.com'}</span>
                <span className="text-xs font-bold text-slate-600 mt-1">Developer</span>
              </div>
            </div>
            <button
              onClick={() => onDelete(user.id)}
              className="w-full text-red-400 hover:text-red-600 font-bold text-xs py-2 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tables;