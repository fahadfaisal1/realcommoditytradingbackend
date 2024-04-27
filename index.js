// Import packages
const express = require("express");
// Importing Routes from routes
const home = require("./routes/home");
const admins_Router = require("./routes/admins");
const blogs_Router = require("./routes/blogs");
const categories_Router = require("./routes/categories");
const countries_Router = require("./routes/countries");
const credit_history_Router = require("./routes/credit_history");
const document_inquiry_Router = require("./routes/document_inquiry");
const failed_job_Router = require("./routes/failed_jobs");
const inquiries_Router = require("./routes/inquiries");
const member_registrtations_Router = require("./routes/member_registrtations");
const partner_lounge_comments_Router = require("./routes/partner_lounge_comments");
const partner_lounge_q_like_Router = require("./routes/partner_lounge_q_like");
const partner_lounge_Router = require("./routes/partner_lounge");
const partner_registrations_Router = require("./routes/partner_registrations");
const post_comment_n_socials_Router = require("./routes/post_comment_n_socials");
const post_like_tbl_Router = require("./routes/post_like_tbl");
const post_Router = require("./routes/post");
const settings_Router = require("./routes/settings");
const sharing_post_record_Router = require("./routes/sharing_post_record");
const trade_role_Router = require("./routes/trade_role");
const users_Router = require("./routes/users");
const v_offer_like_tbl_Router = require("./routes/v_offer_like_tbl");
const verified_offers_comments_Router = require("./routes/verified_offers_comments");
const wallet_Router = require("./routes/wallet");
const offer_Router = require("./routes/verified_offers");


const mongoose = require('mongoose');
const cors = require('cors');
const res = require("express/lib/response");

// Middlewares
const app = express();

// Set up CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://realcommoditytrading.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Use JSON middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://moiz36:4RGR6pM_Yh-cx7z@cluster0.ocumynd.mongodb.net/realcommoditytrading')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


// Routes
app.use("/document_inquiry", home);
app.use("/admins", admins_Router);
app.use("/blogs", blogs_Router);
app.use("/categories", categories_Router);
app.use("/countries", countries_Router);
app.use("/credit_history", credit_history_Router);
app.use("/verified_offers", offer_Router);
app.use("/users", users_Router);
app.use("/users", document_inquiry_Router);
app.use("/failed_jobs", failed_job_Router);
app.use("/inquiries", inquiries_Router);
app.use("/member_registrtations", member_registrtations_Router);
app.use("/partner_lounge_comments", partner_lounge_comments_Router);
app.use("/partner_lounge_q_like_Router", partner_lounge_q_like_Router);
app.use("/partner_lounge", partner_lounge_Router);
app.use("/partner_registrations", partner_registrations_Router);
app.use("/post_comment_n_socials", post_comment_n_socials_Router);
app.use("/post_like_tbl", post_like_tbl_Router);
app.use("/post", post_Router);
app.use("/settings", settings_Router);
app.use("/sharing_post_record", sharing_post_record_Router);
app.use("/trade_role", trade_role_Router);
app.use("/v_offer_like_tbl", v_offer_like_tbl_Router);
app.use("/verified_offers_comments", verified_offers_comments_Router);
app.use("/wallet", wallet_Router);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
