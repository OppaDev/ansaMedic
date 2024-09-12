import express from 'express';
import {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  updateAdminProfile,
  deleteAdmin,
  getAllAdmins,
  getDashboardStats
} from '../controllers/adminController';
import { authMiddleware } from '../middleware/authMiddleware';
import { adminMiddleware } from '../middleware/adminMiddleware';

const router = express.Router();

// Rutas públicas
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// Rutas protegidas (requieren autenticación)
router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/profile', getAdminProfile);
router.put('/profile', updateAdminProfile);
router.delete('/:id', deleteAdmin);
router.get('/all', getAllAdmins);
router.get('/dashboard-stats', getDashboardStats);

export default router;