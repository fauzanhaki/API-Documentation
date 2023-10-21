const express = require("express");
const router = express.Router();
const userControllers = require("./controllers/userControllers");
const accountControllers = require("./controllers/accountControllers");
const transactionControllers = require("./controllers/transactionControllers");
const checkToken = require("./middleware/checkToken");
const validate = require("./middleware/validate");
const schema = require("./validatorShemas/authValidatorSchema");

router.get("/", (req, res) => {
  return res.json({
    message: "Hello World!!!",
  });
});

router.post(
  "/auth/login",
  validate(schema.loginValidator),
  userControllers.loginUser
);
router.post(
  "/auth/register",
  validate(schema.registerValidator),
  userControllers.registerUser
);
router.get("/auth/authenticate", checkToken, userControllers.loginUser);
router.post("/users", userControllers.registerUser);
router.get("/users", userControllers.getUsers);
router.get("/users/:userId", userControllers.getUserById);
router.put("/users/:userId/update-profile", userControllers.updateProfile);
router.put(
  "/users/:userId/update-password",
  validate(schema.changePasswordValidator),
  userControllers.updatePassword
);
router.delete("/users/:userId", userControllers.deleteUserById);
router.post(
  "/accounts",
  validate(schema.accountValidator),
  accountControllers.addAccounts
);
router.get("/accounts", accountControllers.getAccounts);
router.get("/accounts/:accountId", accountControllers.getAccountById);
router.delete("/accounts/:accountId", accountControllers.deleteAccountById);
router.put("/accounts/:accountId", accountControllers.updateAccountById);
router.post(
  "/transactions",
  validate(schema.transactionValidator),
  transactionControllers.addTransaction
);
router.get("/transactions", transactionControllers.getTransactions);
router.get(
  "/transactions/:transactionId",
  transactionControllers.getTransactionById
);
router.delete(
  "/transactions/:transactionId",
  transactionControllers.deleteTransactionById
);
router.put(
  "/transactions/:transactionId",
  transactionControllers.updateTransactionById
);

module.exports = router;
