import { check } from "express-validator";
import { UserAccount } from "../../models";

export default class UserAccountMiddleware {
  static ValidateAddUserAccountRequest = [
    check("email").custom(async (value) => {
        const userAccount = await UserAccount.findOne({
          where: {
            email: value,
          },
        });
        if (userAccount) {
          return Promise.reject("email is already in use");
        }
      })
      .not().isEmpty().withMessage("Email can't be blank")
      .isEmail().withMessage("Email format should be correct"),
    check("password").not().isEmpty().withMessage("Password can't be empty"),
    check("name").not().isEmpty().withMessage("name can't be empty"),
    check("picture").optional().isString().withMessage("picture should be a string"),
    check("step").optional().isInt().withMessage("step should be number"),
  ];
}