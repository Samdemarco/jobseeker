const sequelize = require('../config/connection');
const { User, Job } = require('../models');

const userData = require('./userData.json');
const jobData = require('./jobData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //console.log("userData: " + userData);  
  //console.log("jobData: " + jobData);  

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Job.bulkCreate(jobData);

  process.exit(0);
};

seedDatabase();




