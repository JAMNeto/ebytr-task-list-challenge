const router = require('express').Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);
router.put('/:id', taskController.editTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;