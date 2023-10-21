const cloudinary = require('cloudinary').v2;
const { cloud_name, api_key, api_secret } = require("../config/key");

cloudinary.config({ 
    cloud_name: cloud_name, 
    api_key: api_key, 
    api_secret: api_secret,
    secure: true
  });

module.exports = cloudinary;
