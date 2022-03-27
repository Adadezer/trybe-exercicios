import { Router } from 'express';
import UsersController from '../msc/controllers/users.controller';

const router = Router();

const usersController = new UsersController();

router.get('/users', (_req, res) => usersController.getAll(_req, res));
router.get('/users/:id', (req, res) => usersController.getById(req, res))

export default router;