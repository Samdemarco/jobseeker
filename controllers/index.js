const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const jobBoardRoute = require('./jobBoardRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/job_board', jobBoardRoute);

module.exports = router;
