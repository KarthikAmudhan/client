import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Alldata() {
  let [data, setData] = useState([]);
  let [editId, setEditId] = useState(null);
  let [editUser, setEditUser] = useState({ name: "", email: "", password: "", amount: 0 });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let result = await axios.get("https://server-r6l9.onrender.com/data");
    setData(result.data);
  }

  async function handleDelete(id) {
    await axios.delete(`https://server-r6l9.onrender.com/delete/${id}`);
    fetchData();
  }

  function handleEdit(user) {
    setEditId(user._id);
    setEditUser(user);
  }

  async function handleUpdate(e) {
    e.preventDefault();
    await axios.put(`https://server-r6l9.onrender.com/update/${editId}`, editUser);
    setEditId(null);
    fetchData();
  }

  return (
    <div className="video-background">
      <video autoPlay muted loop className="background-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="form-container wide-container black-box-shadow" style={{width:'800px'}}>
        <h1 className="form-title">ALL DATA</h1>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>E-MAIL</th>
              <th>PASSWORD</th>
              <th>BALANCE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.amount}</td>
                <td>
                  <button onClick={() => handleEdit(user)} className="btn btn-warning">Edit</button>
                  <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editId && (
          <form onSubmit={handleUpdate} className="edit-form black-box-shadow">
            <div className="input-group">
              <label className="form-label">NAME:</label>
              <input
                type="text"
                value={editUser.name}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                className="form-control black-input"
                placeholder="Name"
              />
            </div>
            <div className="input-group">
              <label className="form-label">E-MAIL    :</label>
              <input
                type="email"
                value={editUser.email}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                className="form-control black-input"
                placeholder="Email"
              />
            </div>
            <div className="input-group">
              <label className="form-label">PASSWORD :</label>
              <input
                type="text"
                value={editUser.password}
                onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
                className="form-control black-input"
                placeholder="Password"
              />
            </div>
            <div className="input-group">
              <label className="form-label">BALANCE  :</label>
              <input
                type="number"
                value={editUser.amount}
                onChange={(e) => setEditUser({ ...editUser, amount: e.target.value })}
                className="form-control black-input"
                placeholder="Balance"
              />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        )}
      </div>
    </div>
  );
}
