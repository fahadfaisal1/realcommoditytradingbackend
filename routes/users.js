import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
export const users_Mongoose = new Schema({
    "_id": mongoose.ObjectId,
    "id": Number,
    "user_type": String,
    "name": String,
    "email": String,
    "email_verified_at": String,
    "password": String,
    "country": String,
    "role": String,
    "first_name": String,
    "last_name": String,
    "phone": String,
    "verification": String,
    "is_agree": String,
    "remember_token": String,
    "email_otp": String,
    "email_verfication": String,
    "verification_token": String,
    "users_ip": String,
    "is_email_verified": String,
    "social_id": String,
    "social_type": String,
    "created_at": String,
    "updated_at": String,
}, { collection: "users" })
export const users_MongooseModel = model("users_MongooseModel", users_Mongoose);

router.get('/', async (req, res) => {
    try {
      // Use Mongoose to find all documents in the "verified_offers" collection
      const users = await users_MongooseModel.find();
      // Return the fetched data as a response
      res.json(users);
    } catch (error) {
      // If an error occurs, return an error response
      res.status(500).json({ message: error.message });
    }
  });

  // Route to find one user by ID
router.get('/:id', async (req, res) => {
    try {
      const user = await users_MongooseModel.findOne({ _id: req.params.id });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Route to delete one user by ID
  router.delete('/:id', async (req, res) => {
    try {
      const deletedUser = await users_MongooseModel.findOneAndDelete({ _id: req.params.id });
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Route to update one user by ID
  router.patch('/:id', async (req, res) => {
    try {
      const updatedUser = await users_MongooseModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export default router;
