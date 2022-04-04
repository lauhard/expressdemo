const App = require('./express/express.js');

const app = App.listen();

app.get('/', (req, res)=>{
    res.send("hello");
})
