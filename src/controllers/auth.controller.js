//import user model here

const register = async  (req, res) => {
    const User = require('../models/user.model');

    const register = async (req, res) => {
      const { name, email, password, username, role, gender, dateOfBirth } = req.body;
      try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email is already registered.' });
        }
        const user = new User({ name, email, password, username, role, gender, dateOfBirth });
        await user.save();
        res.status(201).json({ message: 'User is registered successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    };

};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
      const token = user.generateAuthToken();
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
};


const AuthController = {
    register,
    login
};

module.exports = AuthController;