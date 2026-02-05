import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import Tables from "./components/Tables";
import { Wallet, Users } from "lucide-react";

const App = () => {
  const [users, setUsers] = useState(() => {
    try {
      const savedUsers = localStorage.getItem("myUser");
      if (savedUsers && savedUsers !== "undefined") {
        return JSON.parse(savedUsers);
      }
    } catch (error) {
      console.error("LocalStorage Parse Error:", error);
    }
    return []; 
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (users.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          localStorage.setItem("myUser", JSON.stringify(data));
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("myUser", JSON.stringify(users));
    }
  }, [users]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    if (updatedUsers.length === 0) localStorage.removeItem("myUser");
  };

  const addUser = (name) => {
    const newUser = {
      id: Date.now(),
      name: name,
      email: `${name.split(" ")[0].toLowerCase()}@example.com`,
      company: { name: "Freelance" },
    };
    setUsers([newUser, ...users]);
  };

  return (
    <div >
      <Sidebar />
      
      <main>
        <Navbar onSearch={(e) => setSearchTerm(e.target.value)} />

        <div >
          <StatsCard
            title="Total Authors"
            amount={filteredUsers.length}
            percentage="100"
            isUp={true}
            icon={<Users size={20} />}
          />

          <StatsCard
            title="New Clients"
            amount="+5"
            percentage="12"
            isUp={false}
            icon={<Wallet size={20} />}
          />
        </div>

        <Tables
          data={filteredUsers}
          onDelete={deleteUser}
          onAdd={addUser}
        />
      </main>
    </div>
  );
};

export default App;