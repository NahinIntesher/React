import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const adminCountResponse = await axios.get(
        "http://localhost:3000/auth/admin_count"
      );
      const employeeCountResponse = await axios.get(
        "http://localhost:3000/auth/employee_count"
      );
      const salaryCountResponse = await axios.get(
        "http://localhost:3000/auth/salary_count"
      );
      const adminRecordsResponse = await axios.get(
        "http://localhost:3000/auth/admin"
      );

      if (adminCountResponse.data.Status) {
        setAdminTotal(adminCountResponse.data.Result[0].admin);
      }

      if (employeeCountResponse.data.Status) {
        setEmployeeTotal(employeeCountResponse.data.Result[0].employee);
      }

      if (salaryCountResponse.data.Status) {
        setSalaryTotal(salaryCountResponse.data.Result[0].salaryOFEmp);
      }

      if (adminRecordsResponse.data.Status) {
        setAdmins(adminRecordsResponse.data.Result);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message || "Error fetching data");
      console.error("Error fetching data:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-around  mt-3 p-3 text-white">
        <div className="w-1/4 p-4 border shadow-sm">
          <div className="text-center mb-2">
            <h4 className="text-xl font-bold">Admin</h4>
          </div>
          <hr />
          <div className="flex justify-between">
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className="w-1/4 p-4 border shadow-sm">
          <div className="text-center mb-2">
            <h4 className="text-xl font-bold">Employee</h4>
          </div>
          <hr />
          <div className="flex justify-between">
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className="w-1/4 p-4 border shadow-sm">
          <div className="text-center mb-2">
            <h4 className="text-xl font-bold">Salary</h4>
          </div>
          <hr />
          <div className="flex justify-between">
            <h5>Total:</h5>
            <h5>${salaryTotal}</h5>
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3 text-white">
        <h3 className="text-2xl font-bold">List of Admins</h3>
        <table className="table-auto w-full border-collapse py-2 mt-5">
        <thead>
            <tr>
              <th className="border border-gray-300 py-2 ">
                Id
              </th>
              <th className="border border-gray-300 py-2">
                Name
              </th>
              <th className="border border-gray-300 py-2 ">
                Email
              </th>
              <th className="border border-gray-300 py-2 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {admins.map((a, index) => (
              <tr key={index} >
                <td className="border border-gray-300 py-2">{a.id}</td>
                <td className="border border-gray-300 py-2">{a.name}</td>
                <td className="border border-gray-300 py-2">{a.email}</td>
                <td className="border border-gray-300 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded">
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

export default Home;
