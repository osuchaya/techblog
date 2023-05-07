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

  res.render("homepage", { blogposts, logged_in: req.session.logged_in, });
});
router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

// router.post("/api/users/login", async (req, res) => {
//     console.log(req.body)
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }
//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     res.status(400).json({err, message: "Error!"});
//   }
// });


// router.post('/logout', (req, res) => {

//     console.log(req.session.logged_in)
//     if (req.session.logged_in) {
  
//       req.session.destroy(() => {
       
//         res.status(204).end();
//         res.redirect('/login');
//       });
//     } else {
//       res.status(404).end();
//       res.render('login');
//     }
//   });
  
module.exports = router;

//user can write (POST/DELETE)has many blogpost
//blogpost can be viewed by many users (GET only)
