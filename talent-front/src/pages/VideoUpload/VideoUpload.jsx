import React, { useRef, useState } from 'react';
import './style.css';
import axios from 'axios';
import upload from '../../assets/upload.png';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Loading from '../Loading/Loading';

function VideoUpload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showProgress, setShowProgress] = useState(false);
  const fileInputRef = useRef(null);
  const navigation = useNavigate();
  const { id } = useParams();

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const uploadFile = (file) => {
    setLoading(true);
    if (!file || uploadedFile) return;

    const filename =
      file.name.length > 12 ? `${file.name.substring(0, 13)}... .${file.name.split('.')[1]}` : file.name;

    const formData = new FormData();
    formData.append('file', file);

    setShowProgress(true);

    axios
      .post('http://127.0.0.1:8000/api/upload-file', formData, {
        onUploadProgress: ({ loaded, total }) => {
          if (loaded === total) {
            const fileSize = total < 1024 ? `${total} KB` : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
            setUploadedFile({ name: file.name, size: fileSize });
            setShowProgress(false);
            setLoading(false)
          }
        },
      })

      .catch(console.error);

  };
  const handlenextbtn = () => {

    navigation('/select/' + id)

  }
  const handleDelete = () => {
    setUploadedFile(null);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    uploadFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar selecteditem="Add Candidate" />
          <div className='upload-box' onDrop={handleDrop} onDragOver={handleDragOver}>
            <p>Upload Your Interview</p>
            <form>
              <input className='file-input' type='file' name='file' hidden ref={fileInputRef} onChange={(e) => uploadFile(e.target.files[0])}></input>
              <div className='icon' onClick={handleFileInputClick}>
                <img src={upload} alt='upload'></img>
              </div>
              <p>Browser File to upload</p>
              <p className='text-xs'>File Type: MP4</p>
            </form>

            {showProgress && (
              <section className='loading-area'>
                <li className='row'>
                  <i className='fas fa-file-alt'></i>
                  <div className='content'>
                    <div className='details'>
                      <span className='name'>{`Uploading...`}</span>
                    </div>
                  </div>
                </li>
              </section>
            )}

            {uploadedFile && (
              <section className='uploaded-area'>
                <li className='row'>
                  <div className='content upload'>
                    <i className='fas fa-file-alt'></i>
                    <div className='details'>
                      <span className='name'>{uploadedFile.name}</span>
                      <span className='size'>{uploadedFile.size}</span>
                    </div>
                  </div>
                  <i className='fas fa-times' onClick={handleDelete} style={{ color: 'white', 'marginLeft': '45rem', 'position': 'absolute' }}></i>
                </li>
              </section>
            )}
            {uploadedFile && (
              <span className="nextvideocontainer">
                <button className="nextbuttonvideo" onClick={handlenextbtn}>Next</button>
              </span>
            )}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default VideoUpload;
