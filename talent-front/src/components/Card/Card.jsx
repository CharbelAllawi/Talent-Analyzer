import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Compare from '.././../components/Compare/Compare';
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import './style.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
export function CandidateCard({
  id,
  full_name,
  position,
  imageUrl,
  date_of_birth,
  phone,
  email,
  iscompared,
  comparepage,
  onDelete,
}) {
  const [editing, setEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    full_name: full_name,
    position: position,
    email: email,
    date_of_birth: date_of_birth,
    phone: phone,
    id: id,
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    setEditing(false);
    console.log(editedInfo);

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/updatecandidate',
        body: editedInfo,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    onDelete(id);

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/deletecandidate',
        body: { id: id },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({ ...editedInfo, [name]: value });
  };

  const resetCompare = () => { };

  const navigation = useNavigate();

  const handleresultclick = (e) => {
    navigation('/result/' + id);
  };

  return (
    <Card className="w-full max-w-[23rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img src={'http://localhost:8000/storage/candidatesprofile/' + imageUrl} />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

        {comparepage === false ? (
          editing ? (
            <>
              <IconButton
                className="!absolute top-4 right-4 rounded-full pr-14"
                onClick={handleSave}
                style={{ background: 'none' }}
              >
                <SaveIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                className="!absolute top-4 right-10 rounded-full pr-10"
                onClick={handleDelete}
                style={{ background: 'none' }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                className="!absolute top-4 right-11 rounded-full pr-14"
                onClick={handleEdit}
                style={{ background: 'none' }}
              >
                <EditIcon />
              </IconButton>
            </>
          )
        ) : null}
      </CardHeader>

      <CardBody>
        <div className="mb-3 flex flex-col items-center justify-betweenn"> {/* Changed flex to flex-col */}
          {editing ? (
            <>
              <input
                type="text"
                name="full_name"
                value={editedInfo.full_name}
                onChange={handleChange}
                className="input-fieldcard"
              />
              <input
                type="text"
                name="position"
                value={editedInfo.position}
                onChange={handleChange}
                className="input-fieldcard"
              />
            </>
          ) : (
            <>
              <Typography variant="h5" color="blue-gray" className="font-medium">
                {editedInfo.full_name}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="font-medium">
                {editedInfo.position}
              </Typography>
            </>
          )}
          <span>
            {!editing && comparepage == false && (
              <Compare class iscompared={iscompared} candidate_id={id} />
            )}
          </span>

          <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal"></Typography>
        </div>
        <Typography color="gray">
          <ul className="uldesc mt-10 mb-10">
            <li>
              Email : {editing ? <input type="text" name="email" className="input-fieldcard" value={editedInfo.email} onChange={handleChange} /> : editedInfo.email}
            </li>
            <li>
              Phone : {editing ? <input type="text" name="phone" className="input-fieldcard" value={editedInfo.phone} onChange={handleChange} /> : editedInfo.phone}
            </li>
            <li>
              DOB : {editing ? <input type="text" name="date_of_birth" className="input-fieldcard" value={editedInfo.date_of_birth} onChange={handleChange} /> : editedInfo.date_of_birth}
            </li>
          </ul>
        </Typography>
      </CardBody>
      <CardFooter className="pt-3 ">
        {!editing && (
          <Button
            onClick={handleresultclick}
            className="bg-custom-gradient fixed bottom-4 left-2 "
            size="lg"
            fullWidth={true}
          >
            Show Result
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}




