const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const blog = sequelize.define("blog_table", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

sequelize.sync();
