const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const jobBoardRoute = require('./jobBoardRoute');
const userRoutes = require('./userRoutes');



router.use('/', homeRoutes);
router.use('/job_board', jobBoardRoute);
router.use('/users', userRoutes);

module.exports = router;
