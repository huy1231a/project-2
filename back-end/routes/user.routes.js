import {
  getAllUsers,
  createUser,
  getUserInfoByID,
} from "../controllers/user.controllers.js";
import express from "express";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").get(createUser);
router.route("/:id").get(getUserInfoByID);

export default router;
