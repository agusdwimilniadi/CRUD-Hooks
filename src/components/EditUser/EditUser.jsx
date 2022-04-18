import React, { useEffect, useState } from "react";

export default function EditUser(props) {
  console.log("Current user ", props.currentUser);
  const [userEdit, setUserEdit] = useState(props.currentUser);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserEdit({ ...userEdit, [name]: value });
  };

  useEffect(() => {
    setUserEdit(props.currentUser);
  }, [props]);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.updateUser(userEdit.id, userEdit);
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
            value={userEdit.namaUser}
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
            value={userEdit.username}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => {
            props.editUserCancel();
          }}
        >
          Cancel
        </button>
      </form>
    </>
  );
}
