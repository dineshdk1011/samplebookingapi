var express = require('express');
var router = express.Router();
var Bookingontroller = require('../controllers/Booking.Controller');

/*
 * GET
 */
router.get('/', Bookingontroller.list);

/*
 * GET
 */
router.get('/:id', Bookingontroller.show);

/*
 * POST
 */
router.post('/', Bookingontroller.create);

/*
 * PUT
 */
router.put('/:id', Bookingontroller.update);

/*
 * DELETE
 */
router.delete('/:id', Bookingontroller.remove);

module.exports = router;
