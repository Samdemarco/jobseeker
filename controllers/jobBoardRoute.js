const router = require('express').Router();
const { Job } = require('../models');
const withAuth = require('../utils/auth');

// Get all jobs in the database
router.get('/', withAuth, async (req, res) => {
  try {
    // Get all jobs, sorted by title
    const jobData = await Job.findAll({
      attributes: { exclude: ['id'] },
      order: [['job_title', 'ASC']],
    });

    // Serialize user data so templates can read it
    const jobs = jobData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('job_board', {
      jobs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;