const express = require('express');
const router = express.Router();
const {
    createUserHandler,
    getUsersHandler,
    getUserHandler,
    updateUserHandler,
    deleteUserHandler
} = require('../../controllers/v1/userController');

router.get('/', getUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', getUserHandler);
router.put('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
