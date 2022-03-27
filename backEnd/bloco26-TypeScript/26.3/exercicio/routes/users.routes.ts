import { Router } from 'express';
import UsersController from '../msc/controllers/users.controller';
import validationUser from "../middleware/user.middleware";

const router = Router();

const usersController = new UsersController();

router.get('/users', (_req, res) => usersController.getAll(_req, res));
router.get('/users/:id', (req, res) => usersController.getById(req, res));
router.post('/users', validationUser, (req, res) => usersController.create(req, res));

export default router;