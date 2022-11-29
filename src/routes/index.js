const blogsRouter = require('./blogs');
const siteRouter = require('./site');
const detailsRouter = require('./details');




function route(app) {

    app.use('/blogs' , blogsRouter);
    app.use('/search', siteRouter);
    app.use('/details', detailsRouter);
    app.use('/', siteRouter);
    
    

} 

module.exports = route;
