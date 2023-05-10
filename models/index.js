const User = require('./users');
const Blog = require('./blog');
const Comment = require('./comment');

// User.hasMany(Blog, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
// Comment.hasOne(User, {
//     foreignKey: 'user_id',
// });

// User.belongsTo(Comment, {
//     foreignKey: 'comment_id',
// });

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comment };
