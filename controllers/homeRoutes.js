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
      // include: [{ model: Project }],
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
router.put('/pofile', (req, res) => {
  console.log(`\\x1b[1;36mreq.session.user_id: ${req.session.user_id}\\x1b[0m`);
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

module.exports = router;
