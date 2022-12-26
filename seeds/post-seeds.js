const {
  Post
} = require('../models');

const postData = [
  {
      title: "Why MVC is so important",
      post_text: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
      user_id: 1,
  },
  {
      title: "Object-relational Mapping",
      post_text: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
      user_id: 2,
  },
  {
      title: "Handlebars.js",
      post_text: "Is a useful templating language that keeps the View and the code separate and compiles templates into JavaScript functions.",
      user_id: 3,
  },
  {
      title: "Express.js",
      post_text: "Is a framework for Node.js and is used for easier creation of web applications and services.",
      user_id: 4,
  },
  {
      title: "Full Stack Developer",
      post_text: "Is a developer who can handle all the work of databases, servers, systems engineering, and clients.",
      user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;