const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const jobBoardRoute = require('./jobBoardRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/job_board', jobBoardRoute);

module.exports = router;
