const express = require('express');
const router = express.Router();
const accController = require('./accController.js');

router.get('/', accController.getALL);
router.post('/', accController.create);
router.get('/:accountId', accController.getById);
router.put('/:accountId', accController.updateById);
router.delete('/:accountId', accController.deleteById);

module.exports = router;