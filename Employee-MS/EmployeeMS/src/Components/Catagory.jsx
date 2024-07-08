import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-5 mt-3">
      <div className="flex justify-center">
        <h3 className="text-xl font-bold">Category List</h3>
      </div>
      <Link
        to="/dashboard/add_category"
        className="btn btn-success bg-green-500 text-white px-4 py-2 rounded mt-3 inline-block"
      >
        Add Category
      </Link>
      <div className="mt-3">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-2 text-left">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {category.map((c, index) => (
              <tr key={index}>
                <td className="border-b border-gray-300 py-2">{c.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
