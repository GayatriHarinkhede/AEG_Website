import React, { useState, useEffect } from 'react';
import styles from './Submission.css';

const Submission = () => {
  const [files, setFiles] = useState([]);

  // Function to handle file submission
  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(prevFiles => [...prevFiles, ...uploadedFiles]);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional form handling logic here (e.g., sending files to a server)
  };

  // Clean up URLs when component unmounts
  useEffect(() => {
    // Create object URLs for file downloads
    const objectUrls = files.map(file => URL.createObjectURL(file));

    // Clean up function to revoke object URLs
    return () => {
      objectUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [files]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* <h2 className={styles.title}>Submit Your Documents</h2> */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* <input
            type="file"
            id="file-upload"
            className={styles.fileInput}
            multiple
            onChange={handleFileUpload}
          /> */}
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.card}>
        <h2 className={styles.title}>Download Documents</h2>
        <ul className={styles.downloadList}>
          {files.length === 0 ? (
            <li>No files available for download.</li>
          ) : (
            files.map((file, index) => (
              <li key={index} className={styles.downloadItem}>
                <a
                  href={URL.createObjectURL(file)}
                  download={file.name}
                  className={styles.downloadLink}
                >
                  {file.name}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Submission;
