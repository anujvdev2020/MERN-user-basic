const express = require("express");

const router = express.Router();

const {
  handleGetAllUsers,
  handlegetUserById,
  handleUserUpdateById,
  handleUserDeleteById,
  handleCreateNewUser
} = require("../controllers/user");

//GET All Users
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

// GET user from id
router
  .route("/:id")
  .get(handlegetUserById)
  .patch(handleUserUpdateById)
  .delete(handleUserDeleteById);




module.exports = router;
