const router = require ('express').Router();
const {
    getUsers,
    getsingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require ('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getsingleUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendsId').post(addFriend).delete(removeFriend)

module.exports = router;