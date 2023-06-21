const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
    app.get('/authors', AuthorController.getAllAuthors);
    app.get('/authors/:id', AuthorController.getOneAuthor);
    app.patch('/authors/edit/:id', AuthorController.updateAuthor);
    app.post('/authors/new', AuthorController.createAuthor);
    app.delete('/authors/:id', AuthorController.deleteAuthor);
}