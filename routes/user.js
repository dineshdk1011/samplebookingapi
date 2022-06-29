var express = require('express');
var router = express.Router();
var Userontroller = require('../controllers/User.Controller');

/*
 * GET
 */
router.get('/', Userontroller.list);

/*
 * GET
 */
router.get('/:id', Userontroller.show);

/*
 * POST
 */
router.post('/', Userontroller.create);

/*
 * PUT
 */
router.put('/:id', Userontroller.update);

/*
 * DELETE
 */
router.delete('/:id', Userontroller.remove);

module.exports = router;
