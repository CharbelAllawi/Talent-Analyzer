import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Admin = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          method: requestMethods.GET,
          route: '/get_users',
        });
        setLoading(false);

        setInitialData(response[0]);
        setData(response[0]);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/remove-user/' + id,
        body: editedData
      });


    } catch (error) {

      console.log(error);
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditedData(itemToEdit);
    setEditMode(id);
  };

  const saveEdit = async () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editMode ? { ...item, ...editedData } : item
      )
    );
    setEditMode(null);
    setEditedData({});
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/addOrUpdateUser/' + editedData['id'],
        body: editedData
      });


    } catch (error) {

      console.log(error);
    }
  };

  const cancelEdit = () => {
    setEditMode(null);
    setEditedData({});
  };

  return (
    <>
      <Navbar />
      <div className="mcontainer">

        <i className="fas fa-user" style={{ fontSize: '40px', marginRight: '20px' }}></i>

        <h1>Manage Users</h1>
      </div>
      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  {editMode === item.id ? (
                    <input
                      type="text"
                      value={editedData.username || ''}
                      onChange={(e) =>
                        setEditedData({ ...editedData, username: e.target.value })
                      }
                    />
                  ) : (
                    item.username
                  )}
                </td>
                <td>
                  {editMode === item.id ? (
                    <input
                      type="text"
                      value={editedData.email || ''}
                      onChange={(e) =>
                        setEditedData({ ...editedData, email: e.target.value })
                      }
                    />
                  ) : (
                    item.email
                  )}
                </td>
                <td>
                  {editMode === item.id ? (
                    <input
                      type="text"
                      value={editedData.password || ''}
                      onChange={(e) =>
                        setEditedData({ ...editedData, password: e.target.value })
                      }
                    />
                  ) : (
                    item.password
                  )}
                </td>

                <td>
                  {editMode === item.id ? (
                    <>
                      <button className="adminbtn" onClick={saveEdit}>
                        Save
                      </button>
                      <button className="adminbtn" onClick={cancelEdit}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="adminbtn" onClick={() => handleEdit(item.id)}>
                        Edit
                      </button>
                      <button className="adminbtn" onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
