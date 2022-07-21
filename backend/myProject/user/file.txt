var express = require('express');
var router = express.Router();
var User = require('../models/user');

let { encryptPassword, comparePasswords, generateJwt } =
  require('../utils/loginutils');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// User Register API starts here 

router.post('/register', async (req, res) => {
  try {

    const userEmailCheck =
      await User.findOne(
        { email: new RegExp(`^${req.body.email}$`, 'i') }).exec();

    // console.log(adminEmailChk);
    if (userEmailCheck)
      throw new Error('Email already registered');

    req.body.password = await encryptPassword(req.body.password);

    let user = await new User(req.body).save();
    res.status(200).json({ message: "User Register Successfully", data: user, success: true });

    //   await nodemail('contact@jiorooms.com', req.body.email, 'Registration Successfull', "You have been successfully registered")
    //   res.json({ message: 'Admin Registered', success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'Error', data: err, success: false });
  }
})

//   User Register API Close


// User Login API Starts Here

router.post('/login', async (req, res) => {
  try {

    const user =
      await User.findOne
        ({
          email: new
            RegExp(`^${req.body.email}$`, 'i')
        }).exec();

  
    if (!user)
      throw new Error("You are not registered");

    const checkPassword = await
      comparePasswords(req.body.password, user.password);

    if (!checkPassword)
      throw new Error("Check Your Credentials");

    const token = await generateJwt(User._id);
    res.json({ message: 'Logged In', data: token, success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'Error', data: err, success: false });
  }
})


// User Login Api Ends



module.exports = router;
