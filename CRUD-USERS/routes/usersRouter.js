const express = require("express")
const User = require("../models/userRegister")
const authIsadmin = require("../middleware/AuthIsadmin")
require("../middleware/Auth")

const router = express.Router()


//All Users
router.get("/",authIsadmin, async (req, res) => {
  const users = await User.find();
  res.json({ users });
});
//By User
router.get("/:id", async (req, res) => {
  const users = await User.findById(req.params.id);
  res.json({ users });
});
//By User
// router.get("/me", async (req, res) => {
//   const user = User.findById(req.user.id)
//   res.json(user)
// //   console.log(req )
// // //  res.json({msg:"dodo"})
// });




module.exports = router