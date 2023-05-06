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
    res.render("login")
});

router.get("/dashboard", async (req, res) => {
    res.render("dashboard")
});



module.exports = router;

//user can write (POST/DELETE)has many blogpost
//blogpost can be viewed by many users (GET only)
