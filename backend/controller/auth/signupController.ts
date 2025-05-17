import bcrypt from 'bcrypt';
import { Request, Response } from 'express'
import { UserModel } from '../../database/models/User.model.js';
import mongoose from 'mongoose';

export const signupController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  let hashedPassword: string;
  let newUser;
  const saltRounds = 10

  try {
    hashedPassword = await bcrypt.hash(password, saltRounds)
  } catch (err) {
    console.error('Password hashing failed:', err)
    return res.status(500).json({ error: "Failed to hash password" });
  }

  try {

    newUser = new UserModel({
      name,
      email,
      password: hashedPassword
    })

    await newUser.save()

    return res.status(201).json({ message: 'User created successfully' })

  } catch (err: unknown) {

    if (err instanceof mongoose.Error) {
      return res.status(400).json({
        error: 'Email already in use. Please use a different email address.'
      })
    }
    if (err instanceof Error) {
      console.error(err)
      return res.status(500).json({ error: 'Failed to save user' })
    }
  }
}
