
(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var LocalLibrary = require('../dao/LocalLibrary');



    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        console.log(LocalLibrary.books)
    };
}());
