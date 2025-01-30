import React, { useState } from "react";

export default function FileUpload () {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file to upload");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/auth/upload", {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type" header is not needed when using FormData with fetch
        },
      });

      if (response.ok) {
        const data = await response.json();
        alert("File uploaded successfully");
        console.log(data.fileUrl); // You can use this URL to display the file or for management purposes
      } else {
        throw new Error("Error uploading file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ color: "black" }}
      />
      <button type="submit" style={{ color: "black" }}>
        Upload
      </button>
    </form>
  );
};


