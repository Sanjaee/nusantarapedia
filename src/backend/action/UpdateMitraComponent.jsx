import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import NavbarBE from "../NavbarBE";
import { useLogin } from "../useLogin";

const API_KEY = "G8XcZJLaeJTx0jQq"; // Use your API key

// Configure axios with the API key
axios.defaults.headers.common["API_KEY"] = API_KEY;

const UpdateMitraComponent = () => {
  useLogin();
  const [mitraData, setMitraData] = useState({ image_url: "" });
  const [imageUrl, setImageUrl] = useState("");

  const fetchMitra = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/mitra");
      setMitraData(response.data);
      setImageUrl(response.data.image_url);
    } catch (error) {
      toast.error("Error fetching mitra data.");
      console.error("Error fetching mitra data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMitraData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:8000/api/mitra",
        mitraData
      );
      setMitraData(response.data);
      setImageUrl(response.data.image_url);
      toast.success("Mitra updated successfully!");
    } catch (error) {
      toast.error("Error updating mitra.");
      console.error("Error updating mitra:", error);
    }
  };

  useEffect(() => {
    fetchMitra();
  }, []);

  return (
    <>
      <NavbarBE />
      <div className="flex flex-col items-center justify-center p-4 lg:p-8 mt-32 bg-white rounded shadow-md">
        <Toaster />

        <h2 className="text-2xl font-semibold mb-6">Update Mitra</h2>

        <form onSubmit={handleUpdateSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">Ubah Image URL disini</label>
            <input
              type="text"
              name="image_url"
              value={mitraData.image_url}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {mitraData.image_url && (
              <img
                src={mitraData.image_url}
                alt="Mitra"
                className="mt-4 p-2 h-auto border border-gray-800 rounded-md"
              />
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Mitra
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateMitraComponent;
