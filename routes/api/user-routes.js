const router = require('express').Router();
const {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controllers');
router
    .route('/')
    .get(getUser)
    .post(createUser);

router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:id')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;