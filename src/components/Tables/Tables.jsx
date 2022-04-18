import React from "react";

export default function Tables(props) {
  // const [user, setUser] = useState(initialState);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.namaUser}</td>
                <td>{item.username}</td>
                <td>
                  <button
                    className="btn btn-primary me-4"
                    onClick={() => {
                      props.editUser(item);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteUser(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
