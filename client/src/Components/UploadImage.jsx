// UploadImage.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) {
      toast.error("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setUploadedUrl(data.imageUrl);
        toast.success("Image uploaded successfully!");
      } else {
        toast.error(data.message || "Upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("An error occurred. Try again.");
    }
  };

  return (
    <div className="p-4 border rounded-md w-[350px] mx-auto text-center">
      <h2 className="text-xl font-semibold mb-2">Upload Image</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="preview" className="mt-3 h-40 mx-auto object-cover" />}

      <button
        onClick={handleUpload}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Upload
      </button>

      {uploadedUrl && (
        <div className="mt-4">
          <p className="text-green-600">Uploaded Successfully!</p>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            View Image
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
