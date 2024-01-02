import { Sequelize } from "sequelize";
import { userModel } from "./models/user.js";

export const connection = async () => {
  // Option 3: Passing parameters separately (other dialects)
  const sequelize = new Sequelize("node-postgress-test", "postgres", "123456", {
    host: "localhost",
    dialect: "postgres",
  });

  // Global variable
  let User = null;

  // Test database
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Add user model here
    User = userModel(sequelize);

    // Now add method sync then table will be created
    await sequelize.sync();
    console.log("Table created successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// export { User };
