var DoctorModel = require('../models/booking');

/**
 * DoctorController.js
 *
 * @description :: Server-side logic for managing Doctors.
 */
module.exports = {

    /**
     * DoctorController.list()
     */
    list: function (req, res) {
        DoctorModel.find(function (err, Doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Doctor.',
                    error: err
                });
            }

            return res.json(Doctors);
        });
    },

    /**
     * DoctorController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DoctorModel.findOne({ _id: id }, function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Doctor.',
                    error: err
                });
            }

            if (!Doctor) {
                return res.status(404).json({
                    message: 'No such Doctor'
                });
            }

            return res.json(Doctor);
        });
    },

    /**
     * DoctorController.create()
     */
    create: function (req, res) {
        var Doctor = new DoctorModel({
            date: req.body.date,
            fromtime: req.body.fromtime,
            totime: req.body.totime,
            userid: req.body.userid,
            roomname: req.body.roomname,
            price: req.body.price
        });

        Doctor.save(function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Doctor',
                    error: err
                });
            }

            return res.status(201).json(Doctor);
        });
    },

    /**
     * DoctorController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DoctorModel.findOne({ _id: id }, function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Doctor',
                    error: err
                });
            }

            if (!Doctor) {
                return res.status(404).json({
                    message: 'No such Doctor'
                });
            }

            Doctor.date = req.body.date ? req.body.date : Doctor.date;
            Doctor.fromtime = req.body.fromtime ? req.body.fromtime : Doctor.fromtime;
            Doctor.totime = req.body.totime ? req.body.totime : Doctor.totime;
            Doctor.userid = req.body.userid ? req.body.userid : Doctor.userid;
            Doctor.roomname = req.body.roomname ? req.body.roomname : Doctor.roomname;


            Doctor.save(function (err, Doctor) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Doctor.',
                        error: err
                    });
                }

                return res.json(Doctor);
            });
        });
    },

    /**
     * DoctorController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DoctorModel.findByIdAndRemove(id, function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Doctor.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
