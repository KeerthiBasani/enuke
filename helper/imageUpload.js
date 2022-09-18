const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'drkcndwju', 
  api_key: '449717773923378', 
  api_secret: 'uqk4ZNN6Xn9lkvXVoPyaBdEGDrk' 
});

module.exports = cloudinary;
