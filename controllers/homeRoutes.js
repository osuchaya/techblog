const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const { withAuth, areAuth } = require("../utils/auth");

//homeRoutes essentially get all the project data by name
//map the project out so the template can read it
//get project by id
//.get("/dashboard") means localhost/dashboard
//res.render("dashboard") means handlebars file
router.get("/dashboard", withAuth, async (req, res) => {
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] },
    include: [{ model: Blog }],
  });

  const user = userData.get({ plain: true });

  //
  res.render("dashboard", { user, logged_in: req.session.logged_in });
});

router.get("/addblog", withAuth, async (req, res) => {
  res.render("addpost");
});

router.post("/addblog", withAuth, async (req, res) => {
  req.body.user_id = req.session.user_id;
  const newBlog = await Blog.create(req.body);
  res.status(200).json(newBlog);
});

router.put("/editblog", withAuth, async (req, res) => {
    const newBlog = await Blog.update({title: req.body.title, content: req.body.content}, {where: {
        id: req.body.id
    }});
    res.status(200).json(newBlog);
})
router.get("/edit/:blog_id", withAuth, async (req, res) => {
    const blogId = req.params.blog_id;
    const blogData = await Blog.findOne(
      { where: { id: blogId }, include: { all: true, nested: true } }
     
    );
  
    const blog = blogData.get({ plain: true });
    res.render("editpost", { post: blog, logged_in: req.session.logged_in });
})

router.post("/deleteblog", withAuth, async (req, res) => {
  await Blog.destroy({ where: { id: req.body.id } });
  res.status(200);
});

router.post("/addcomment", withAuth, async (req, res) => {
  req.body.user_id = req.session.user_id;
  console.log(req.session.user_id);
  if(req.session.user_id) {
    const newComment = await Comment.create(req.body);
    res.status(200).json(newComment);
  } else {
    res.status(400);
  }
  
});

//get specific info about A blog
//
router.get("/blog/:blog_id", async (req, res) => {
  const blogId = req.params.blog_id;
  const blogData = await Blog.findOne(
    { where: { id: blogId }, include: { all: true, nested: true } }
   
  );

  const blog = blogData.get({ plain: true });
  console.log(blog);
  res.render("blogpost", { post: blog, logged_in: req.session.logged_in });
});
//res.render tells you to go to blogpost.hdb + give this variables to Hdb page
//blogpost.hdb can use post + logged-in
//render logged_in in line 50 is for NAVBAR to know your status

module.exports = router;
