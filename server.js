import express from "express";
import app from "./app.js";
import cloudinary from "cloudinary";
import { createServer } from "http";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("Your Backend is Running");
});

const server = createServer(app);
export default server;
