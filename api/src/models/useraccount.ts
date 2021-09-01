import Sequelize, { Model, DataTypes } from "sequelize";
import sequelize from "../lib/sequelize";
import bcrypt from "bcrypt";

class UserAccount extends Model {
  public id!: number;
  public email!: string;
  public name!: string;
  public password?: string;
  public passwordHash?: string;
  public picture?: string;
  public step?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserAccount.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "email is not valid.",
        },
        notEmpty: {
          msg: "email is required.",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "name is required.",
        },
      },
    },
    picture: {
      type: DataTypes.STRING,
    },
    step: {
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.VIRTUAL,
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

UserAccount.beforeCreate((userAccount, options) => {
  if (userAccount.password) {
    userAccount.passwordHash = bcrypt.hashSync(userAccount.password, 10);
  }
});

UserAccount.beforeUpdate((userAccount, options) => {
  if (userAccount.password) {
    userAccount.passwordHash = bcrypt.hashSync(userAccount.password, 10);
  }
});

export default UserAccount;
