module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    var cors = require('cors')

    var opt = {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    };

    app.post('/notes', cors(opt), notes.create);

    app.get('/notes', cors(opt), notes.findAll);

    app.get('/notes/:noteId', cors(opt), notes.findOne);

    app.put('/notes/:noteId', cors(opt), notes.update);

    app.delete('/notes/:noteId', cors(opt), notes.delete);
}