import React, { useState } from 'react';
import axios from 'axios';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Book Now
  const handleBookNow = async () => {
    try {
      await axios.post('http://localhost:4000/bookings', formData);
      alert('Booking added successfully');
      setFormData({ name: '', email: '', address: '' }); // Clear input fields
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  // Check the Booking
  const handleCheckBooking = async () => {
    try {
      const response = await axios.get('http://localhost:4000/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  // Edit the Booking
  const handleEditBooking = (id) => {
    const bookingToEdit = bookings.find((booking) => booking.id === id);
    setFormData({
      name: bookingToEdit.name,
      email: bookingToEdit.email,
      address: bookingToEdit.address,
    });
    setIsEditing(true);
    setEditingId(id);
  };

  const handleUpdateBooking = async () => {
    try {
      await axios.put(`http://localhost:4000/bookings/${editingId}`, formData);
      alert('Booking updated successfully');
      setIsEditing(false);
      setEditingId(null);
      setFormData({ name: '', email: '', address: '' }); // Clear input fields after update
      handleCheckBooking(); // Refresh bookings after update
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  // Delete the Booking
  const handleDeleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/bookings/${id}`);
      alert('Booking deleted successfully');
      handleCheckBooking(); // Refresh bookings list after deletion
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-9 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-gray-900 dark:bg-blue-300 rounded-md duration-200 w-[900px] max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className='text-2xl font-black'>{isEditing ? 'Edit your Booking' : 'Book your Trip'}</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Body */}
            <div className="mt-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-full border px-2 py-1 mb-4"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-full border px-2 py-1 mb-4"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="w-full rounded-full border px-2 py-1 mb-4"
                value={formData.address}
                onChange={handleInputChange}
              />

              <div className="flex gap-4">
                {isEditing ? (
                  <button
                    className="bg-blue-500 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                    onClick={handleUpdateBooking}
                  >
                    Update Booking
                  </button>
                ) : (
                  <button
                    className="bg-orange-500 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </button>
                )}

                <button
                  className="bg-purple-500 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  onClick={handleCheckBooking}
                >
                  Check the Booking
                </button>
              </div>

              {/* Display Bookings only after clicking Check the Booking */}
              {bookings.length > 0 && (
                <div className="mt-6 max-h-[400px] overflow-y-auto">
                  <h3 className="text-black mb-4 text-2xl font-semibold">All Bookings</h3>
                  <div className="flex flex-wrap gap-4">
                    {bookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="bg-gray-600 text-white p-4 rounded-md w-full flex items-center justify-between"
                      >
                        <div className="flex gap-4 w-full">
                          <div><strong>Name:</strong> {booking.name}</div>
                          <div><strong>Email:</strong> {booking.email}</div>
                          <div><strong>Address:</strong> {booking.address}</div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            className="bg-blue-700 text-white py-1 px-4 rounded-full"
                            onClick={() => handleEditBooking(booking.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-700 text-white py-1 px-4 rounded-full"
                            onClick={() => handleDeleteBooking(booking.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
