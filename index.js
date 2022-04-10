const {app} = require('./express/server.js');

const articlesRouter = require('./express/routes/articles.md.router');

app.use('/blog', articlesRouter);

/* app.get('/', (req, res) => {
    res.redirect('/blog');
}) */


