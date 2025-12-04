import express from "express";
import { createUser, getUser, getUsers } from "../controllers/user.controllers.js";

const router = express.Router();

router.post('/user', createUser);
router.get('/users', getUsers);
router.get('/user/:id', getUser);

export default router;