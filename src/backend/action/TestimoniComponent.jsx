import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./Modal"; // Import the modal component
import NavbarBE from "../NavbarBE";
import { useLogin } from "../useLogin";

const API_KEY = "G8XcZJLaeJTx0jQq";

// Set the default header for axios
axios.defaults.headers.common["API_KEY"] = API_KEY;

const TestimoniComponent = () => {
  useLogin();
  const [testimonis, setTestimonis] = useState([]);
  const [form, setForm] = useState({ id: "", image_url: "" });
  const [editing, setEditing] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [selectedTestimoniId, setSelectedTestimoniId] = useState(null);

  const fetchTestimonis = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/testimoni");
      setTestimonis(response.data);
    } catch (error) {
      toast.error("Error fetching testimonis.");
      console.error("Error fetching testimonis:", error);
    }
  };

  useEffect(() => {
    fetchTestimonis();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/testimoni", {
        image_url: form.image_url,
      });
      toast.success("Testimoni added successfully!");
      setForm({ id: "", image_url: "" });
      fetchTestimonis();
    } catch (error) {
      toast.error("Error adding testimoni.");
      console.error("Error adding testimoni:", error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/testimoni/${form.id}`, {
        image_url: form.image_url,
      });
      toast.success("Testimoni updated successfully!");
      setForm({ id: "", image_url: "" });
      setEditing(false);
      fetchTestimonis();
    } catch (error) {
      toast.error("Error updating testimoni.");
      console.error("Error updating testimoni:", error);
    }
  };

  const handleEdit = (testimoni) => {
    setForm(testimoni);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/testimoni/${id}`);
      toast.success("Testimoni deleted successfully!");
      setDeleteConfirmation(false);
      fetchTestimonis();
    } catch (error) {
      toast.error("Error deleting testimoni.");
      console.error("Error deleting testimoni:", error);
    }
  };

  const confirmDelete = (id) => {
    setSelectedTestimoniId(id);
    setDeleteConfirmation(true);
  };

  return (
    <>
      <NavbarBE />
      <div className="lg:container lg:mx-auto custom-200:flex custom-200:flex-col mt-32 p-6 sm:p-8 bg-white rounded shadow-md">
        <Toaster />

        <h2 className="text-2xl font-semibold mb-6">Testimoni Management</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Add Testimoni</h3>
          <form onSubmit={handleAddSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">
                Tambah Image URL disini
              </label>
              <input
                type="text"
                name="image_url"
                required
                onChange={handleChange}
                placeholder="Masukkan image URL disini"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Tambah Testimoni
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">List of Testimonis</h3>
          {testimonis.length === 0 ? (
            <p>No testimonis available.</p>
          ) : (
            <ul className="space-y-4">
              {testimonis.map((testimoni) => (
                <li
                  key={testimoni.id}
                  className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-md"
                >
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col ">
                      <img
                        src={testimoni.image_url}
                        alt="Testimoni"
                        className="w-80 border mb-2 object-cover rounded-md mr-4"
                      />
                      <p className="text-gray-800 lg:block hidden">{testimoni.image_url}</p>
                    </div>
                    <div className="flex space-x-2 mt-4 ">
                      <button
                        onClick={() => handleEdit(testimoni)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => confirmDelete(testimoni.id)}
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
            <h3 className="text-xl font-semibold mb-4">Edit Testimoni</h3>
            <form onSubmit={handleEditSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700">Masukan Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  value={form.image_url}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <img className="mt-2 w-80 border" src={form.image_url} alt="" />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update Testimoni
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
              <p>Are you sure you want to delete this testimoni?</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleDelete(selectedTestimoniId)}
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

export default TestimoniComponent;
