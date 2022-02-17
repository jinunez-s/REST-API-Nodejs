import express from "express";
import { createUser, getUsers, getUserId, deleteUser, updatePatchUser } from "../controllers/user.js";
const router = express.Router();
//All routes in here are starting with /users
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserId);
router.delete('/:id', deleteUser);
router.patch('/:id', updatePatchUser);
export default router;