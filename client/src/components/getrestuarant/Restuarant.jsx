import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import './Restaurant.css';



const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch all restaurants
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        toast.error("Failed to fetch restaurants.", { position: "top-right" });
      }
    };

    fetchData();
  }, []);

  // Delete a restaurant
  const deleteRestaurant = async (restaurantId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/restaurants/${restaurantId}`
      );
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((restaurant) => restaurant._id !== restaurantId)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      toast.error("Failed to delete restaurant.", { position: "top-right" });
    }
  };

  return (
    <div className="restaurant-container">
      <div className="header">
        <h2>Restaurant Management Application</h2>
        <Link to={"/add"} className="btn-add">Add Restaurant</Link>
      </div>
      <table className="restaurant-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Restaurant Name</th>
            <th>Cost</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Top Food</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.length > 0 ? (
            restaurants.map((restaurant, index) => (
              <tr key={restaurant._id}>
                <td>{index + 1}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.type}</td>
                <td>{restaurant.location}</td>
                <td>{restaurant.rating}</td>
                <td>{restaurant.top_food}</td>
                <td className="action-buttons">
                  <button
                    className="btn-delete"
                    onClick={() => deleteRestaurant(restaurant._id)}
                  >
                    <i className="fa-solid fa-trash"></i> Delete
                  </button>
                  <Link
                    to={`/edit/${restaurant._id}`}
                    className="btn-edit"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="no-data">
                No restaurants found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Restaurant;
