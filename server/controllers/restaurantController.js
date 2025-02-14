import Restaurant from "../models/Restaurant.js";

// 1. Create a new restaurant
export const createRestaurant = async (req, res) => {
    const { name, type, location, rating, top_food } = req.body;
    try {
        const newRestaurant = new Restaurant({
            name,
            type,
            location,
            rating,
            top_food,
        });
        
        await newRestaurant.save();
        res.status(201).json(newRestaurant); // Return the created restaurant with 201 status
    } catch (error) {
        res.status(500).json({ error: error.message }); // Return error message if failed
    }
};

// 2. Get all restaurants
export const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants); // Return all restaurants
    } catch (error) {
        res.status(500).json({ error: error.message }); // Return error message if failed
    }
};

// 3. Get a restaurant by id
export const getRestaurantById = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.status(200).json(restaurant); // Return the restaurant by id
    } catch (error) {
        res.status(500).json({ error: error.message }); // Return error message if failed
    }
};

// 4. Update a restaurant by id
export const updateRestaurant = async (req, res) => {
    const { id } = req.params;
    const { name, type, location, rating, top_food } = req.body;
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, {
            name,
            type,
            location,
            rating,
            top_food,
        }, { new: true });

        if (!updatedRestaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.status(200).json(updatedRestaurant); // Return the updated restaurant
    } catch (error) {
        res.status(500).json({ error: error.message }); // Return error message if failed
    }
};

// 5. Delete a restaurant by id
export const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
        if (!deletedRestaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.status(200).json({ message: "Restaurant deleted successfully" }); // Confirmation of delete
    } catch (error) {
        res.status(500).json({ error: error.message }); // Return error message if failed
    }
};