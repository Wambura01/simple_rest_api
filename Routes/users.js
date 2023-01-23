import express from "express";
import { v4 as uuid } from "uuid";

const router = express.Router(); // initialize router

const users = [];

// get all users
router.get("/", (req, res) => {
  res.send(users);
});

// create a user
router.post("/", (req, res) => {
  const user = req.body;

  const userId = uuid();
  users.push({ ...user, id: userId });
  res.send(`User with name ${user.firstName} added!!`);
});

// get a single user using their id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

export default router;
