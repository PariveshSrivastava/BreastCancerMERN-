import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import connectToDatabase from '../../db';

export default async function login(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  // Validate the request body
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Connect to the MongoDB database
  const db = await connectToDatabase();
  const users = db.collection('users');

  try {
    // Find the user with the provided email
    const user = await users.findOne({ email });
    
    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await compare(password, user.password);
    
    // Check if the password matches
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Create a JSON Web Token (JWT) for the authenticated user
    const token = sign({ userId: user._id }, 'your-secret-key');

    // Return the token in the response
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
