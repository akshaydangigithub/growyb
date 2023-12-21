import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyAPI, { Item } from './MyAPI';
import { toast } from 'react-toastify';
import { Alert, Container } from 'react-bootstrap';
import { BsFileEarmarkArrowUp } from 'react-icons/bs';
import AlertCustome from './Alert';


const UploadLeads = () => {
  const [jsonData, setJsonData] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadedLeads, setUploadedLeads] = useState(null);
  const [errorE,setErrorE]= useState(null);
  const [successE,setSuccessE]= useState(null);

  useEffect(()=>{
    clearAlerts();
  },[successE,errorE])

  const clearAlerts = ()=>{
    setTimeout(()=>{
      setErrorE(null);
      setSuccessE(null);
    },5000)
  };

  const uploadLead = () => {
    let token = Item.getItem('token');
    if (token) {
      MyAPI.post('/lead/upload', jsonData, token)
        .then((res) => {
          if (res.data.success) {
            setUploadedLeads(res.data.result);
            setSuccessE(res.data.message || res.message);
          } else {
            setErrorE('something wrong...!');
          }
        })
        .catch((error) => {
          setErrorE('Error uploading leads!');
        });
    } else {
      Item.setItem('token', '');
      Item.setItem('isAdmin', false);
      window.location.assign('/');
    }
  };

  // const onDrop = (acceptedFiles) => {
  //   const file = acceptedFiles[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const data = new Uint8Array(e.target.result);
  //       const workbook = XLSX.read(data, { type: 'array' });
  //       const sheetName = workbook.SheetNames[0];
  //       const worksheet = workbook.Sheets[sheetName];
  //       const xlsData = XLSX.utils.sheet_to_json(worksheet, {
  //         rawDates: true,
  //         dateNF: 'DD-MM-YYYY'
  //       });

  //       setJsonData(xlsData);
  //       setFileUploaded(true);
  //     };

  //     reader.readAsArrayBuffer(file);
  //   }
  // };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        
        const xlsData = XLSX.utils.sheet_to_json(worksheet, {
          raw: false,
          dateNF: 'yyyy-mm-dd', // Adjust date format as needed
          cellDates: true,
          header: 0 // Assuming the first row contains headers
        });
  
        // Assuming the 'leadUniqueId' is the first column, remove it
        const processedData = xlsData.map(row => {
          const { 1: _, ...rest } = row;
          return rest;
        });
  
        setJsonData(processedData);
        setFileUploaded(true);
      };
  
      reader.readAsArrayBuffer(file);
    }
  };
  
  

  const clearTable = () => {
    setJsonData([]);
    setFileUploaded(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.xls, .xlsx, .csv',
    multiple: false,
  });

  return (
    <div className="container mt-4" style={{ width: '100%' }}>

      {!fileUploaded && (
        <div className="card" style={{ height: '100%' }}>
          <div className="card-header">
            <h5>Upload Excel or CSV File</h5>
          </div>
          <Container className="card-body d-flex flex-column align-items-center justify-content-center" style={{ height: '40vh' }} {...getRootProps()}>
            <BsFileEarmarkArrowUp size={50} /> {/* Icon */}
            <input {...getInputProps()} />
            <p className="text-center mt-3">Drag 'n' drop an Excel or CSV file here, or click to select one</p>
          </Container>
        </div>
      )}

      {fileUploaded && !uploadedLeads && jsonData.length > 0 && (
        <div className="card-body parentCard" style={{ width: '100%', height: 'auto'}}>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  {Object.keys(jsonData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jsonData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {uploadedLeads && uploadedLeads.length > 0 && (
        <div className="card-body parentCard" style={{ width: '100%', height: 'auto'}}>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  {Object.keys(uploadedLeads[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {uploadedLeads.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {fileUploaded && !uploadedLeads && (
        <div className="btn mt-3">
          <div className="btn btn-sm btn-primary" onClick={uploadLead}>Upload Lead</div>
          <div className="btn btn-sm btn-danger ms-3" onClick={clearTable}>Cancel Lead</div>
        </div>
      )}

      {errorE && (
        <AlertCustome alertType={'danger'} alertMessage={errorE} />
      )}

      {successE && (
        <AlertCustome alertType={'success'} alertMessage={successE} />
      )}

    </div>
  );
};

export default UploadLeads;
