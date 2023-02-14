const UserRole = require("../models/UserRole");

const logIn = (req, res) => {
    UserRole.findOne({ name: req.body.name })
        .exec()
        .then((userInfo) => {
            // Check user name
            if (userInfo == null) {
                // user doesn't exist
                res.status(404).json({
                    loginSuccess: false,
                    message: "There is no user with the name entered."
                })
            } else {
                // Check password
                userInfo.comparePassword(req.body.password, (error, isMatch) => {
                    if (!isMatch) {
                        return res.json({
                            loginSuccess: false,
                            message: "Password is wrong."
                        })
                    } else {
                        res.status(200).json({
                            loginSuccess: true,
                            name: userInfo.name,
                            role: userInfo.role
                        })
                    }
                })
            }
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const saveUserRole = (req, res) => {
    const newUserRole = new UserRole(req.body);
    newUserRole
        .save()
        .then((results) => {
            res.status(201).json({
                save: true,
                _id: results._id,
                name: results.name,
                role: results.role
            });
        })
        .catch((error) => {
            res.status(500).json({ save: false, error});
        });
};

module.exports = { logIn, saveUserRole };