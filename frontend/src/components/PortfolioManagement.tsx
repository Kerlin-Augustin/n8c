import axios from "axios"
import { useState } from 'react'

const PortfolioManagement = () => {

  const [file, setFile] = useState<File | null>(null)

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      console.log(e.target.files[0])
    }
  }

  const upload10kfilings = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!file) return

    try {
      const preSignedRes = await axios.get("/api/generate-presigned-url", {
        params: {
          filename: file.name,
          contentType: file.type,
        },
      });

      const { url, key } = preSignedRes.data;

      const uploadPreSignedRes = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      if (uploadPreSignedRes.status !== 200) {
        throw new Error("S3 upload failed");
      }

      const savePreSignedRes = await axios.post("/api/user10KFiling", {
        filename: file.name,
        filetype: file.type,
        filesize: file.size,
        s3Key: key, // this is the key you generated on backend
        s3Url: url.split("?")[0], // remove query params if you want permanent URL
        userId: 123456789, // You should have this from context/auth
      });

      console.log("Saved to DB:", savePreSignedRes.data);
      alert("Upload successful!");

    } catch (err) {
      console.error("Upload error:", err);
      alert("Something went wrong.");
    }

    // get all of the contracts from the database and compare it to the search Query
  }

  return (
    <div>
      <form onSubmit={upload10kfilings}>
        <label htmlFor='file'>Upload 10K Filings</label>
        <br />
        <input
          type='file'
          onChange={handleFileInputChange}
          accept=".pdf"
          id="file"
        />
        <button>
          Upload PDF
        </button>
      </form>
      <section></section>
    </div>

  )

}

export default PortfolioManagement