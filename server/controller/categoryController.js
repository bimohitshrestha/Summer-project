const User = require('../model/categoryModal'
)

exports.addLogin =  async (req, res) => {

    try {
      const { name, password } = req.body;
     
  
      // Find the user in the database
      const user = await User.findOne({ name });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Compare the provided password with the stored password
      if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Return a success response
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      // Return an error response
      res.status(500).json({ error: 'Failed to login' });
    }
  }

  exports.addSignup = async (req, res) => {
    try {
      const { name,  email ,password} = req.body;
  
      // Create a new user
      const user = await User.create({ name, email, password});
  
      // Return a success response
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      // Return an error response
      res.status(500).json({ error: 'Failed to register user' });
    }
  }