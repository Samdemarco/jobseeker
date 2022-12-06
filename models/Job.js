const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Job extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

Job.init(
  {
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job_URL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
{
  hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
}
);

module.exports = Job;