import express from "express";

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../Controllers/usersController.js";

const router = express.Router(); // initialize router

// get all users
router.get("/", getUsers);

// create a user
router.post("/", createUser);

// get a single user using their id
router.get("/:id", getUser);

// delete a user from using their id
router.delete("/:id", deleteUser);

// update a user using their id
router.patch("/:id", updateUser);

export default router;
