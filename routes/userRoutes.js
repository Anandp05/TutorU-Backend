const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController'); // Ensure the path is correct

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
