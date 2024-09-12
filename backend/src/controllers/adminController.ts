import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Admin, { IAdmin } from '../models/Admin';
import config from '../config/config';

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;
    const admin = new Admin({ username, email, password, role });
    await admin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering admin', error });
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: admin._id, role: admin.role }, config.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, admin: { id: admin._id, username: admin.username, email: admin.email, role: admin.role } });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

export const getAdminProfile = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findById((req as any).user.id).select('-password');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admin profile', error });
  }
};

export const updateAdminProfile = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    const admin = await Admin.findByIdAndUpdate((req as any).user.id, { username, email }, { new: true }).select('-password');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(400).json({ message: 'Error updating admin profile', error });
  }
};

export const deleteAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting admin', error });
  }
};

export const getAllAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find().select('-password');
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admins', error });
  }
};

export const getDashboardStats = async (req: Request, res: Response) => {
  // Implementa la lógica para obtener estadísticas del dashboard
  res.json({ message: 'Dashboard stats' });
};