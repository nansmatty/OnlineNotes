import express from 'express';
const router = express.Router();
import {
  createNotes,
  deleteNotes,
  getNotes,
} from '../controller/noteController.js';
import { saveGuard } from '../middleware/authMiddleware.js';

router.get('/', saveGuard, getNotes);
router.post('/', saveGuard, createNotes);
router.delete('/:id', saveGuard, deleteNotes);

export default router;
