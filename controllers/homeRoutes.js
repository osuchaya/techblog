const router = require("express").Router();
const { Blog, User } = require("../models");
const { withAuth, areAuth } = require("../utils/auth");

//homeRoutes essentially get all the project data by name
//map the project out so the template can read it
//get project by id
//.get("/dashboard") means localhost/dashboard
//res.render("dashboard") means handlebars file
router.get("/dashboard", withAuth, async (req, res) => {
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Blog }],
      });
  
      const user = userData.get({ plain: true });




  res.render("dashboard", { user });
});

router.get("/addblog", withAuth, async (req, res) => {
    res.render("addpost")
})

router.post("/addblog", withAuth, async (req,res) => {
    req.body.user_id = req.session.user_id;
    const newBlog = await Blog.create(req.body);
    res.status(200).json(newBlog);
});

module.exports = router;
