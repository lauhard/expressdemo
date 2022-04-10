const markdownConfig = require('../config/markdown-it');
const matter = require('gray-matter');
const markdown  = require('markdown-it')
const path = require('path');
const fs = require('fs');
const md = markdown(markdownConfig);

const articles = fs.readFileSync(path.join(__dirname + '/../persistence/articles.json'))
console.log("JSON.parse(articles)");
console.log(JSON.parse(articles));

const readMarkdownFile = (filename) =>{
    try {
        const mdFilePath = path.join(__dirname + `/../persistence/articles/${filename}`);
        const file = matter.read(mdFilePath)
        console.log("file");
        console.log(file);
        return {
            success: true,
            file: file,
        } 
    } catch (error) {
        console.log("error");
        console.log(error);
        return {
            success: false,
            message: error.message
        }
    } 
}

const renderMardownFile = (mdFile) => {
    const content = mdFile.content;
    return md.render(content)
}

const checkSlug = (slug) => {
    found = JSON.parse(articles)
                .find(article=> article.slug == slug)
    return found;
}

const getArticleList = (req, res) => {
    console.log("getArticles");
    console.log(JSON.parse(articles));
    res.render('blog/index', {
        posts: JSON.parse(articles)
    })
}

const getArticle = (req, res) => {
    const slug = req.params.slug;
    const article = checkSlug(slug);
    console.log("getArticle");
    console.log(article);
    if(!article)
        res.status("404").send("file not found")
    else {
        console.log("article");
        console.log(article);
        const result = readMarkdownFile(article.filename)   
        if(result.success) {
            const file = result.file;
            console.log("file");
            console.log(file);
            content = renderMardownFile(file)
            res.render('blog/articles/index', {
                post: content,
                title: file.data.title,
                description: file.data.description,
                image: file.data.image
            });   
        } 
    }
}



module.exports = {
    getArticle,
    getArticleList
}