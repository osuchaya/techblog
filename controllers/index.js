const router = require("express").Router();
const { Blog, User } = require("../models");

//const apiRoutes = require('./api');
//const
router.get("/", async (req, res) => {
  const blogData = await Blog.findAll({
    order: [["date_created", "DESC"]],
    include: [
      {
        model: User,
      },
    ],
  });
  const blogposts = blogData.map((blogobject) =>
    blogobject.get({ plain: true })
  );

  res.render("homepage", { blogposts });
});
router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

router.post("/api/users/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({err, message: "Error!"});
  }
});

module.exports = router;

//user can write (POST/DELETE)has many blogpost
//blogpost can be viewed by many users (GET only)
