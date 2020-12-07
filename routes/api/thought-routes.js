const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    postThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getThought)
    .post(postThought);

router
    .route('/:id')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:id/reactions')
    .post(postReaction)

router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;