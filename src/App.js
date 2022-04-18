import "./App.css";
import { useState } from "react";
import Tables from "./components/Tables/Tables";
import AddUser from "./components/AddUser/AddUser";
import EditUser from "./components/EditUser/EditUser";
import { Link } from "react-router-dom";

function App() {
  const userData = [
    { id: 1, namaUser: "Agus", username: "agusdwimilniadi" },
    { id: 2, namaUser: "Dwi", username: "dwimilniadi" },
    { id: 3, namaUser: "Milniadi", username: "milniadiagus" },
  ];
  const initFormState = { id: null, namaUser: "", username: "" };

  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(initFormState);
  const [editing, setEditing] = useState(false);

  // CRUD
  const addUser = (userNew) => {
    setEditing(false);
    userNew.id = users.length + 1; // seting id baru
    setUsers([...users, userNew]);
  };

  const editUserCancel = () => {
    setEditing(false);
  };
  const editUser = (userDataEdit) => {
    setEditing(true);
    setCurrentUser({
      id: userDataEdit.id,
      namaUser: userDataEdit.namaUser,
      username: userDataEdit.username,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((item) => (item.id === id ? updateUser : item)));
  };
  const deleteUser = (id) => {
    setEditing(false);
    const usersBaruPwol = users.filter((item) => item.id !== id);
    setUsers(usersBaruPwol); // pelajari filter pada javascript
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {editing ? (
              <>
                <h1>Edit User</h1>
                <EditUser
                  editUserCancel={editUserCancel}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </>
            ) : (
              <>
                <h1>Add User</h1>
                <AddUser addUser={addUser} />
              </>
            )}
          </div>
          <div className="col-md-6">
            <h1>View User</h1>
            <Tables users={users} deleteUser={deleteUser} editUser={editUser} />
          </div>
        </div>
        <Link to="/about/123">About Page</Link>
      </div>
    </>
  );
}

export default App;
