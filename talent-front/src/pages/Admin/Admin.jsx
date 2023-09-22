import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import { useNavigate } from 'react-router-dom';

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
          route: '/get-candidates',
        });
        setLoading(false);
        console.log(response);
        setInitialData(response);
        setData(response);
        console.log(response)
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditedData(itemToEdit);
    setEditMode(id);
  };

  const saveEdit = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editMode ? { ...item, ...editedData } : item
      )
    );
    setEditMode(null);
    setEditedData({});
    console.log(editedData)

  };

  const cancelEdit = () => {
    setEditMode(null);
    setEditedData({});
  };

  return (
    <>
      <Navbar />
      <div className="mcontainer">
        <h1>Manage Users</h1>
      </div>
      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>DOB</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  {editMode === item.id ? (
                    <input
                      type="text"
                      value={editedData.full_name || ''}
                      onChange={(e) =>
                        setEditedData({ ...editedData, full_name: e.target.value })
                      }
                    />
                  ) : (
                    item.full_name
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
                      value={editedData.phone_number || ''}
                      onChange={(e) =>
                        setEditedData({ ...editedData, phone_number: e.target.value })
                      }
                    />
                  ) : (
                    item.phone_number
                  )}
                </td>
                <td>
                  {editMode === item.id ? (
                    <input
                      type="text"
                      value={editedData.dob || ''}
                      onChange={(e) =>
                        setEditedData({ ...editedData, dob: e.target.value })
                      }
                    />
                  ) : (
                    item.dob
                  )}
                </td>
                <td>
                  {editMode === item.id ? (
                    <input
                      type="text"
                      value={editedData.position || ''}
                      onChange={(e) =>
                        setEditedData({ ...editedData, position: e.target.value })
                      }
                    />
                  ) : (
                    item.position
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
    </>
  );
};

export default Admin;
