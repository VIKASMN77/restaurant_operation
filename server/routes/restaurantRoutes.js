import express from "express";
import { 
    createRestaurant, 
    getAllRestaurants, 
    getRestaurantById, 
    updateRestaurant, 
    deleteRestaurant 
} from "../controllers/restaurantController.js";

const router = express.Router();

// Route for creating a restaurant
router.post("/restaurants", createRestaurant);

// Route for getting all restaurants
router.get("/restaurants", getAllRestaurants);

// Route for getting a single restaurant by ID
router.get("/restaurants/:id", getRestaurantById);

// Route for updating a restaurant by ID
router.put("/restaurants/:id", updateRestaurant);

// Route for deleting a restaurant by ID
router.delete("/restaurants/:id", deleteRestaurant);

export default router;