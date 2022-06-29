var DoctorModel = require('../models/user');

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

        DoctorModel.findOne({_id: id}, function (err, Doctor) {
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
			name : req.body.name,
			email : req.body.email,
			phone : req.body.phone,
			password : req.body.password,
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

        DoctorModel.findOne({_id: id}, function (err, Doctor) {
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

            Doctor.name = req.body.name ? req.body.name : Doctor.name;
			Doctor.email = req.body.email ? req.body.email : Doctor.email;
			Doctor.phone = req.body.phone ? req.body.phone : Doctor.phone;
			Doctor.password = req.body.password ? req.body.password : Doctor.password;
			
			
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
