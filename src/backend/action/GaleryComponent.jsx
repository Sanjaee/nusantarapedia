import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./Modal"; // Ensure you have a Modal component for edit operations
import NavbarBE from "../NavbarBE";
import { useLogin } from "../useLogin";

const API_KEY = "G8XcZJLaeJTx0jQq";

axios.defaults.headers.common["API_KEY"] = API_KEY;

const GalleryComponent = () => {
  useLogin();
  const [galleries, setGalleries] = useState([]);
  const [form, setForm] = useState({ id: "", image_url: "" });
  const [editing, setEditing] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [selectedGalleryId, setSelectedGalleryId] = useState(null);

  const fetchGalleries = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/galery");
      setGalleries(response.data);
    } catch (error) {
      toast.error("Error fetching gallery items.");
      console.error("Error fetching gallery items:", error);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/galery", {
        image_url: form.image_url,
      });
      toast.success("Gallery item added successfully!");
      setForm({ id: "", image_url: "" }); // Reset the form state
      fetchGalleries();
    } catch (error) {
      toast.error("Error adding gallery item.");
      console.error("Error adding gallery item:", error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/galery/${form.id}`, {
        image_url: form.image_url,
      });
      toast.success("Gallery item updated successfully!");
      setForm({ id: "", image_url: "" });
      setEditing(false);
      fetchGalleries();
    } catch (error) {
      toast.error("Error updating gallery item.");
      console.error("Error updating gallery item:", error);
    }
  };

  const handleEdit = (gallery) => {
    setForm(gallery);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/galery/${id}`);
      toast.success("Gallery item deleted successfully!");
      setDeleteConfirmation(false);
      fetchGalleries();
    } catch (error) {
      toast.error("Error deleting gallery item.");
      console.error("Error deleting gallery item:", error);
    }
  };

  const confirmDelete = (id) => {
    setSelectedGalleryId(id);
    setDeleteConfirmation(true);
  };

  return (
    <>
      <NavbarBE />
      <div className="lg:container lg:mx-auto custom-200:flex custom-200:flex-col mt-32 p-6 sm:p-8 bg-white rounded shadow-md">
        <Toaster />

        <h2 className="text-2xl font-semibold mb-6">Gallery Management</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Add Gallery Item</h3>
          <form onSubmit={handleAddSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">Image URL</label>
              <input
                type="text"
                name="image_url"
                value={form.image_url}
                placeholder="Masukkan image URL disini"
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Gallery Item
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">List of Gallery Items</h3>
          {galleries.length === 0 ? (
            <p>No gallery items available.</p>
          ) : (
            <ul className="space-y-4">
              {galleries.map((gallery, index) => (
                <li
                  key={gallery.id}
                  className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-md"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-col ">
                      <div className="flex items-center mb-2">
                        <span className="mr-2 font-bold">{index + 1}.</span>
                        <img
                          src={gallery.image_url}
                          alt="Gallery"
                          className="w-80 border mb-2 object-cover rounded-md mr-4"
                        />
                        <p className="text-gray-800 lg:block hidden">
                          {gallery.image_url}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4 ">
                      <button
                        onClick={() => handleEdit(gallery)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => confirmDelete(gallery.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {editing && (
          <Modal isOpen={editing} onClose={() => setEditing(false)}>
            <h3 className="text-xl font-semibold mb-4">Edit Gallery Item</h3>
            <form onSubmit={handleEditSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  value={form.image_url}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {form.image_url && (
                  <img
                    className="mt-2 w-80 border"
                    src={form.image_url}
                    alt=""
                  />
                )}
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update Gallery Item
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-4 py-2 ml-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </form>
          </Modal>
        )}

        {deleteConfirmation && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this gallery item?</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleDelete(selectedGalleryId)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setDeleteConfirmation(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryComponent;
