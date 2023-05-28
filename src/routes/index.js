const blogsRouter = require('./blogs');
const siteRouter = require('./site');
const myRouter = require('./my');
const detailsRouter = require('./details');
const usersRouter = require('./users');



function route(app) {

    app.use('/blogs' , blogsRouter);
    app.use('/signup', usersRouter);
    app.use('/search', siteRouter);
    app.use('/my', myRouter);
    app.use('/details', detailsRouter);
    app.use('/', siteRouter);
    
    

} 

module.exports = route;
