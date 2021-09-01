import { Router } from "express";
import UserAccountController from "./controller";
import UserAccountMiddleware from "./middleware";

export default class UserAccountRoutes {
  public router: Router;
  public userAccountController: UserAccountController = new UserAccountController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post(
      "/",
      UserAccountMiddleware.ValidateAddUserAccountRequest,
      this.userAccountController.addUserAccount
    );
  }
}