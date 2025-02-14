import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import './Edit.css';  // Import the CSS file

const EditRestaurant = () => {
  const defaultRestaurant = {
    name: "",
    type: "",
    location: "",
    rating: "",
    top_food: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(defaultRestaurant);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/restaurants/${id}`, restaurant)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">
        Back
      </Link>
      <h3 className="mb-4">Update Restaurant</h3>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Restaurant Name
          </label>
          <input
            type="text"
            className="form-control"
            value={restaurant.name}
            onChange={inputChangeHandler}
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
            value={restaurant.type}
            onChange={inputChangeHandler}
            id="type"
            name="type"
            placeholder="Cost (cost in rupees)"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            value={restaurant.location}
            onChange={inputChangeHandler}
            id="location"
            name="location"
            placeholder="Enter restaurant location"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            value={restaurant.rating}
            onChange={inputChangeHandler}
            id="rating"
            name="rating"
            placeholder="Rating (out of 5)"
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
            value={restaurant.top_food}
            onChange={inputChangeHandler}
            id="top_food"
            name="top_food"
            placeholder="Top Food (e.g., Pizza, Burger, etc.)"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Restaurant
        </button>
      </form>
    </div>
  );
};

export default EditRestaurant;
