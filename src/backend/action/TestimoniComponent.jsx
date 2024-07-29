import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./Modal"; // Import the modal component
import NavbarBE from "../NavbarBE";
import { useLogin } from "../useLogin";

const API_KEY = "G8XcZJLaeJTx0jQq";

axios.defaults.headers.common["API_KEY"] = API_KEY;

const TestimoniComponent = () => {
  useLogin();
  const [testimonis, setTestimonis] = useState([]);
  const [form, setForm] = useState({
    id: "",
    img_url: "",
    name: "",
    jabatan: "",
    univ: "",
    deskripsi: "",
  });
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
      await axios.post("http://localhost:8000/api/testimoni", form);
      toast.success("Testimoni added successfully!");
      setForm({
        id: "",
        img_url: "",
        name: "",
        jabatan: "",
        univ: "",
        deskripsi: "",
      }); // Clear form input
      fetchTestimonis();
    } catch (error) {
      toast.error("Error adding testimoni.");
      console.error("Error adding testimoni:", error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/testimoni/${form.id}`, form);
      toast.success("Testimoni updated successfully!");
      setForm({
        id: "",
        img_url: "",
        name: "",
        jabatan: "",
        univ: "",
        deskripsi: "",
      });
      setEditing(false);
      fetchTestimonis();
      window.location.reload(); // Reload the page to reflect changes
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
              <label className="block text-gray-700">Image URL</label>
              <input
                type="text"
                name="img_url"
                required
                value={form.img_url}
                onChange={handleChange}
                placeholder="Masukkan image URL disini"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Nama</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Masukkan nama disini"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Jabatan</label>
              <input
                type="text"
                name="jabatan"
                required
                value={form.jabatan}
                onChange={handleChange}
                placeholder="Masukkan jabatan disini"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Universitas</label>
              <input
                type="text"
                name="univ"
                required
                value={form.univ}
                onChange={handleChange}
                placeholder="Masukkan universitas disini"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Deskripsi</label>
              <textarea
                name="deskripsi"
                required
                value={form.deskripsi}
                onChange={handleChange}
                placeholder="Masukkan deskripsi disini"
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
              {testimonis.map((testimoni, index) => (
                <li
                  key={testimoni.id}
                  className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-md"
                >
                  <div className="flex flex-col w-full">
                    <div className="justify-center bg-[#FFFFFF] rounded-2xl items-start flex flex-col w-full h-[200px] px-5">
                      <div className="flex items-start">
                        <img
                          className="rounded-full w-[95px] h-[95px] object-cover"
                          src={testimoni.img_url}
                          alt=""
                        />
                        <div className=" w-[140px] ml-5 text-start text-[#696969]">
                          <p className="font-bold text-sm text-[#000000]">
                            {testimoni.name}
                          </p>
                          <p className="text-[10px]">{testimoni.jabatan}</p>
                          <p className="text-[10px]">{testimoni.univ}</p>
                        </div>
                      </div>
                      <p className="text-[10px] mt-5 text-center text-[#696969]">
                        {testimoni.deskripsi}
                      </p>
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
            <div className="bg-white p-6 rounded-lg shadow-lg max-h-screen overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4">Edit Testimoni</h3>
              <form onSubmit={handleEditSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700">Image URL</label>
                  <input
                    type="text"
                    name="img_url"
                    value={form.img_url}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <img className="mt-2 w-80 border" src={form.img_url} alt="" />
                </div>
                <div>
                  <label className="block text-gray-700">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Jabatan</label>
                  <input
                    type="text"
                    name="jabatan"
                    value={form.jabatan}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Universitas</label>
                  <input
                    type="text"
                    name="univ"
                    value={form.univ}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Deskripsi</label>
                  <textarea
                    name="deskripsi"
                    value={form.deskripsi}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
            </div>
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
