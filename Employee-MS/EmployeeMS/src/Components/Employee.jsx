import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete_employee/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <div className="px-5 mt-3">
      <div className="flex justify-center">
        <h3 className="text-2xl font-bold">Employee List</h3>
      </div>
      <Link
        to="/dashboard/add_employee"
        className="bg-green-500 text-white px-4 py-2 rounded mt-3 inline-block"
      >
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-2 text-left">Name</th>
              <th className="border-b-2 border-gray-300 py-2 text-left">Image</th>
              <th className="border-b-2 border-gray-300 py-2 text-left">Email</th>
              <th className="border-b-2 border-gray-300 py-2 text-left">Address</th>
              <th className="border-b-2 border-gray-300 py-2 text-left">Salary</th>
              <th className="border-b-2 border-gray-300 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr key={e.id}>
                <td className="border-b border-gray-300 py-2">{e.name}</td>
                <td className="border-b border-gray-300 py-2">
                  <img
                    src={`http://localhost:3000/Images/` + e.image}
                    className="w-16 h-16 object-cover rounded-full"
                    alt={e.name}
                  />
                </td>
                <td className="border-b border-gray-300 py-2">{e.email}</td>
                <td className="border-b border-gray-300 py-2">{e.address}</td>
                <td className="border-b border-gray-300 py-2">{e.salary}</td>
                <td className="border-b border-gray-300 py-2">
                  <Link
                    to={`/dashboard/edit_employee/` + e.id}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
