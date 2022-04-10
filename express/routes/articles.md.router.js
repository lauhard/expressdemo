const express = require('express');

const {getArticle, getArticleList} = require('../controller/articles.md.controller');

const articlesRouter = express.Router();
console.log("articlesRouter");
articlesRouter.get('/:slug', getArticle);

articlesRouter.get('/', getArticleList)

module.exports = articlesRouter;