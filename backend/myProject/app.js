    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
    var mongoose = require('mongoose');
    

    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');
    var adminRouter = require('./routes/admin');
    var productlistingRouter = require('./routes/productlisting');
    var emailsendRouter = require('./routes/emailsend');

    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/admin', adminRouter);
    app.use('/productlisting', productlistingRouter);
    app.use('/emailsend', emailsendRouter);



    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });
    //MongoDB connectivity with Mongoose starts here
    mongoose.connect('mongodb://127.0.0.1:27017/apkdatabase', { useNewUrlParser: true },
        (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Db Connected")
            }

        }
    )



   


    






    module.exports = app;