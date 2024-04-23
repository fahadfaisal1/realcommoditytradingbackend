import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
export const verified_offers_comments_Mongoose = new Schema({
    "_id": mongoose.ObjectId,
    "id": Number,
    "user_id": Number,
    "v_offer_id": Number,
    "name": String,
    "email_address": String,
    "comment_text": String,
    "created_at": Date,
    "updated_at": Date,
}, { collection: "verified_offers_comments" })
export const verified_offers_comments_MongooseModel = model("verified_offers_comments_MongooseModel", verified_offers_comments_Mongoose);

router.get('/', async (req, res) => {
    try {
      // Use Mongoose to find all documents in the "verified_offers" collection
      const verified_comments = await verified_offers_comments_MongooseModel.find();
      // Return the fetched data as a response
      res.json(verified_comments);
    } catch (error) {
      // If an error occurs, return an error response
      res.status(500).json({ message: error.message });
    }
  });