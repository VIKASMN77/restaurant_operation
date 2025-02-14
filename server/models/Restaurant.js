import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Makes this field mandatory
    },
    type: {
        type: Number,
        required: true,  // Makes this field mandatory
    },
    location: {
        type: String,
        required: true,  // Makes this field mandatory
    },
    rating: {
        type: Number,
        min: 0,           // Rating can't be less than 0
        max: 5,           // Rating can't be more than 5
        required: true,   // Makes this field mandatory
    },
    top_food: {
        type: String,
        required: true,   // Makes this field mandatory
    }
});

// Create the Restaurant model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Export the model
export default Restaurant;