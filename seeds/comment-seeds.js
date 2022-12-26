const {
  Comment
} = require('../models');

const commentData = [
  {
      comment_text: "Full stack is where it's at!",
      user_id: 1,
      post_id: 5
  },
  {
      comment_text: "Express.js has made my web dev life much easier!",
      user_id: 2,
      post_id: 4
  },
  {
      comment_text: "Yay for handlebars! A great template language!",
      user_id: 3,
      post_id: 3
  },
  {
      comment_text: "ORM sounds like an 80s new wave band!",
      user_id: 4,
      post_id: 2
  },
  {
      comment_text: "MVC is the basic structure in which almost all web apps are built on.",
      user_id: 5,
      post_id: 1
  },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;