import React, { useState } from "react";
import "../styles.css"; // Import Tailwind CSS

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    nationality: "",
    grade: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3500/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      alert('Submission successful: ' + result);
      // Optionally, reset the form here
      setFormData({
        firstName: "",
        lastName: "",
        birthDate: "",
        address: "",
        nationality: "",
        grade: "",
        parentName: "",
        parentPhone: "",
        parentEmail: "",
      });
    } catch (error) {
      alert('Submission failed: ' + error.message);
    }
  };

  return (
    <div className="flex items-center relative justify-center min-h-screen mb-6 ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 w-1/2 items-center mt-6 rounded-lg shadow-xl"
      >
        <section className="mb-6 p-6">
          <h2 className="sm:text-3xl sm:text-custom-blue sm:font-bold mb-4">
            Candidate Information
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-custom-blue sm:font-regular">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-custom-blue sm:font-regular">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-custom-blue sm:font-regular">Birth Date</label>
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-custom-blue sm:font-regular">Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-custom-blue sm:font-regular">Nationality</label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>
          </div>
        </section>

        <section className="mb-6 p-6">
          <h2 className="sm:text-3xl sm:text-custom-blue sm:font-bold mb-4">Select Grade</h2>
          <label className="block text-sm font-medium sm:text-custom-blue sm:font-regular">Level</label>
          <select name="grade" value={formData.grade} onChange={handleChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md" required>
            <option value="" disabled>Select Grade</option>
            {[...Array(6).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </section>

        <section className="bg-white p-6 rounded-lg mb-6">
          <h2 className="sm:text-3xl sm:text-custom-blue sm:font-bold mb-4">Parent Information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-custom-blue">Parent Name</label>
              <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-900" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-custom-blue">Parent Phone</label>
              <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-900" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-custom-blue">Parent Email</label>
              <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-900" required />
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-4">
          <button type="submit" className="w-1/2 bg-custom-blue text-white py-2 px-4 rounded-md hover:bg-blue-800">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
