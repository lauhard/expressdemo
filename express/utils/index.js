/* const matter = require('../../node_modules/gray-matter');
const path = require('path');
const fspromises = require('fs/promises');

let articlesPath = path.join(__dirname, '/../persistence/articles/');
let jsonArticlesPath = path.join(__dirname, '/../persistence/articles.json');

const generateFileList = async () => {
    try {
        let articles = await fspromises.readdir(articlesPath);
        let jsonArticles = [];
        articles.forEach(article => {
            let file = matter.read(path.join(articlesPath, "/", article))
            console.log(file.data);
            let _article = {
                filename: article,
                slug: slugify(file.data.title),
                data: file.data
            }
            jsonArticles.push(_article);
        });
        let data = JSON.stringify(jsonArticles);
        fspromises.writeFile(jsonArticlesPath, data, err =>{
            if(err) return console.log(err);
        });
    } catch (error) {
        console.log(error)
    }
}

const slugify = (title) => {
    let slug = title;
    slug = slug.replace(/[^A-Za-z0-9\-_]/g, function(ch) {
        // Character that look a bit like 'a'
        if ("áàâä".indexOf(ch) >= 0) { // There are a lot more than this
          return 'ae';
        }
        // Character that look a bit like 'u'
        if ("úùûü".indexOf(ch) >= 0) { // There are a lot more than this
          return 'ue';
        }
        // Character that look a bit like 'u'
        if ("òöô".indexOf(ch) >= 0) { // There are a lot more than this
            return 'oe';
          }
        /* ...long list of others...*
        // Default
        return '-';
    });
    return slug;
} 

module.exports = {
    generateFileList
} */