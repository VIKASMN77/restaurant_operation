import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import './Add.css';  // Import the CSS file

const Add = () => {
  const initialRestaurantState = {
    name: "",
    type: "",
    location: "",
    rating: "",
    top_food: "",
  };

  const [restaurant, setRestaurant] = useState(initialRestaurantState);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/restaurants", restaurant);
      toast.success(res.data.msg, { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add restaurant!", { position: "top-right" });
    }
  };

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">
        Back
      </Link>
      <h1 className="mb-4">Add New Restaurant</h1>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Restaurant Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
            id="name"
            name="name"
            placeholder="Enter restaurant name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Cost
          </label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
            id="type"
            name="type"
            placeholder="Cost in rupees"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Restaurant Location
          </label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
            id="location"
            name="location"
            placeholder="Enter restaurant location"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Restaurant Rating
          </label>
          <input
            type="number"
            className="form-control"
            onChange={inputHandler}
            id="rating"
            name="rating"
            placeholder="Enter restaurant rating"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="top_food" className="form-label">
            Top Food
          </label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
            id="top_food"
            name="top_food"
            placeholder="Enter top food"
            required
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
