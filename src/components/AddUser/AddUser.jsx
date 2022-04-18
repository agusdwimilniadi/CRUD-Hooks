import React, { useState } from "react";

export default function AddUser(props) {
  const initialFormState = { id: null, namaUser: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user.length);
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.namaUser || !user.username) return;
          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="namaUser"
            value={user.namaUser}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
