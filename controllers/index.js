
const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const jobBoardRoute = require('./jobBoardRoute');


router.use('/', homeRoutes);
router.use('/job_board', jobBoardRoute);

//router.use('/api', apiRoutes);

module.exports = router;
