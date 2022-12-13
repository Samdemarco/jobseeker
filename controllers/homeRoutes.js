const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Render homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

/*Render login page
If the user is already logged in, redirect the request to another route*/
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update user's profile
router.put('/profile', async (req, res) => {
  try {
    // Find the user's profile information based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    // Retrieve current profile values
    const user = userData.get({ plain: true });
    /*    const currentName = user.name;
        const currentEmail = user.email;
        const currentResume = user.resume_url;*/
    User.update(req.body, {
      where: {
        id: req.session.user_id,
      },
    });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    // Current user couldn't be retrieved from the database
    res.status(500).json(err);
  }

  console.log(`\nreq.body: ${req.body.name}\t${req.body.email}\t${req.body.resume_url}\t\n`);
  /*  let profileUpdatedInfo;
    // Verify which profile values change before updating
    if (currentName != req.body.name) {
      profileUpdatedInfo = {"name": req.body.name};
    } else if (currentEmail != req.body.email) {
  
    }
  */
});

module.exports = router;
