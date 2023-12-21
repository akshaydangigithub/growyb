import React from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import * as Papa from 'papaparse';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadExcelFile = () => {
    const [jsonData, setJsonData] = React.useState([]);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const xlsData = XLSX.utils.sheet_to_json(worksheet);

                setJsonData(xlsData);
                console.log(xlsData);
            };

            reader.readAsArrayBuffer(file);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.xls, .xlsx, .csv', // Accept xls, xlsx, and csv file types
        multiple: false,
    });

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h5>Upload Excel or CSV File</h5>
                </div>
                <div className="card-body" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an Excel or CSV file here, or click to select one</p>
                </div>
            </div>

            {jsonData.length > 0 && (
                <div className="card mt-4">
                    <div className="card-header">
                        <h5>User Table</h5>
                    </div>
                    <div className="card-body">
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
        </div>
    );
};

export default ReadExcelFile;
