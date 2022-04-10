const express = require('../../node_modules/express');

const {getArticle, getArticleList} = require('../controller/articles.md.controller');

const articlesRouter = express.Router();

articlesRouter.get('/:slug', getArticle);

articlesRouter.get('/', getArticleList)

module.exports = articlesRouter;