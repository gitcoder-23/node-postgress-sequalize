import { Sequelize } from "sequelize";

export const userModel = (sequelize) => {
  const { DataTypes } = Sequelize;

  const tableName = "user_table";

  return sequelize.define(tableName, {
    // define schema
    user: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
  });
};
