const express = require("express");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' }); // Destination folder for storing uploaded files

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const app = express();