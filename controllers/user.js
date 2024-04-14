const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handlegetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).json({ error: "user not found" });
  return res.json(user);
}

async function handleUserUpdateById(req, res) {
  // PATCH a user id
  await User.findByIdAndUpdate(req.params.id, { last_name: "changed" });

  return res.json({ status: "Success" });
}

async function handleUserDeleteById(req, res) {
  // DELETE a user with id
  await User.findByIdAndDelete(req.params.id, { last_name: "changed" });

  return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  // POST a user
  const body = req.body;
  if (!body || !body.first_name || !body.last_name || !body.email) {
    return res.status(400).json({ error: "something went wrong" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });

  return res.status(201).json({ msg: "success" });
}

module.exports = {
  handleGetAllUsers,
  handlegetUserById,
  handleUserUpdateById,
  handleUserDeleteById,
  handleCreateNewUser,
};
