import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Compare from '.././../components/Compare/Compare';
import './style.css'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function CandidateCard({ id, fullName, position, imageUrl, dob, phone, email, iscompared, comparepage, onDelete, }) {
  const [editing, setEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    fullName: fullName,
    position: position,
    email: email,
    dob: dob,
    phone: phone,
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };
  const handleDelete = () => {
    onDelete(id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({ ...editedInfo, [name]: value });
  };

  const resetCompare = () => {
  };

  const navigation = useNavigate();

  const handleresultclick = (e) => {
    navigation('/result/' + id);
  };

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={"http://localhost:8000/storage/candidatesprofile/" + imageUrl}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        {editing ? (
          <>
            <IconButton

              color="green"
              className="!absolute top-4 right-4 rounded-full pr-14 "
              onClick={handleSave}
            >
              Save
            </IconButton>

          </>
        ) : (
          <>
            <IconButton

              color="red"
              className="!absolute top-4 right-20  rounded-full pr-14 "

              onClick={handleDelete}
            >
              Delete
            </IconButton>
            <IconButton

              color="blue"

              className="!absolute top-4 right-4 rounded-full pr-14 "
              onClick={handleEdit}
            >
              Edit
            </IconButton>
          </>

        )}
      </CardHeader>

      <CardBody>
        <div className="mb-3 flex items-center justify-betweenn">
          {editing ? (
            <>
              <input
                type="text"
                name="fullName"
                value={editedInfo.fullName}
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
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {editedInfo.fullName}, {editedInfo.position}
            </Typography>
          )}
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            {!editing && comparepage === false && (
              <Compare iscompared={iscompared} candidate_id={id} />
            )}
          </Typography>
        </div>
        <Typography color="gray">
          <ul className="uldesc mt-10">
            <li>
              Email : {editing ? <input type="text" name="email" className="input-fieldcard" value={editedInfo.email} onChange={handleChange} /> : editedInfo.email}
            </li>
            <li>
              Phone : {editing ? <input type="text" name="phone" className="input-fieldcard" value={editedInfo.phone} onChange={handleChange} /> : editedInfo.phone}
            </li>
            <li>
              DOB : {editing ? <input type="text" name="dob" className="input-fieldcard" value={editedInfo.dob} onChange={handleChange} /> : editedInfo.dob}
            </li>
          </ul>
        </Typography>
      </CardBody>
      <CardFooter className="pt-3 ">
        {!editing && (
          <Button onClick={handleresultclick} className="bg-custom-gradient" size="lg" fullWidth={true}>
            Show Result
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
