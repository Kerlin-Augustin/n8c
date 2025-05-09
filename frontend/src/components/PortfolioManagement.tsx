import axios from "axios"
import { useState } from 'react'

const PortfolioManagement = () => {

  const [file, setFile] = useState<File | null>(null)


  const handleFileChange = (e: any) => {
    console.log(e)
    if (e.target.file) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    try {
      // Step 1: Get the pre-signed URL
      const res = await axios.get("http://localhost:3000/api/generate-presigned-url", {
        params: {
          filename: file.name,
          contentType: file.type,
        },
      });

      const { url } = res.data;

      // Step 2: Upload the file to S3 using the signed URL
      const uploadRes = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      if (uploadRes.status === 200) {
        alert("Upload successful!");
      } else {
        alert("Upload failed.");
      }

    } catch (err) {
      console.error("Upload error:", err);
      alert("Something went wrong.");
    }

  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    axios
      .get('api/userCompany')
      .then(response => {
        console.log(response.data)
      })

    // get all of the contracts from the database and compare it to the search Query
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          onChange={handleFileChange}
          placeholder="Upload Contracts"
        />
        <button onClick={handleUpload} disabled={false}>
          Search
        </button>
      </form>
    </div>

  )

}

export default PortfolioManagement