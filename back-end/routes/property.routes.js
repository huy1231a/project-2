import {
  getAllProperty,
  getPropertyDetails,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/property.controller.js";
import express from "express";

const router = express.Router();

router.route("/").get(getAllProperty);
router.route("/:id").get(getPropertyDetails);
router.route("/").get(createProperty);
router.route("/:id").get(updateProperty);
router.route("/:id").get(deleteProperty);

export default router;
