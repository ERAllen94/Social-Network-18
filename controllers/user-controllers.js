const { User, Thought } = require('../model');

const userController = {
    createUser(req, res) {
        User.create(req.body)
        .then(dbUserData => res.json(dbUserData)
        .catch(err => res.status(400).json(err)));
    },
    getUser(req, res) {
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // postUser(req, res) {
    //     User.create(req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.status(400).json(err));
    // },
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => {
                if (!data) {
                    return res.status(404).json({ message: 'No user was found with this id!' });
                }
                res.json(data)
            })
            .catch(err => res.status(400).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then(data => {
                if (!data) {
                    return res.status(404).json({ message: 'No user was found with this id!' });
                }
                return Thought.deleteMany({
                    _id: { $in: data.thoughts }
                })
            }).then(() => { res.json('User and associated been deleted.') })
            .catch(err => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.id } },
            { new: true, runValidators: true }
        )
            .then(data => {
                if (!data) {
                    return res.status(404).json({ message: 'No was user found with this id!' });
                }
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.id } },
            { new: true }
        )
            .then(data => {
                if (!data) {
                    return res.status(404).json({ message: 'No user was found with this id!' });
                }
                res.json(data);
            })
            .catch(err => res.json(err));
    }
}

module.exports = userController;