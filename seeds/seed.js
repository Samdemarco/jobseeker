const sequelize = require('../config/connection');
const Jobs = require('../models/Jobs');
const  User   = require('../models/User');

const userData = require('./userData.json');
const jobData = require('./jobData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("userData: " + userData);  
  console.log("jobData: " + jobData);  


  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

     await Jobs.bulkCreate(jobData);

  process.exit(0);
};

seedDatabase();




