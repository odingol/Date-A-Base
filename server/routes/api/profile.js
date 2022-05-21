const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveCharacter,
  deleteCharacter,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveCharacter);

router.route('/login').post(login);

router.route('/profile').get(authMiddleware, getSingleUser);

router.route('/profile/:').delete(authMiddleware, deleteCharacter);

module.exports = router;
