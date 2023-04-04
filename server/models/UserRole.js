const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserRoleSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    password: { type: String, required: true },
    role: { type: String, enum:["manager", "trainee"], default:"trainee" },
    user_id: { type: String, default:"" },
    manager_code: { type: String, default:"" }
});

UserRoleSchema.pre("save", function(next) {
    let userRole = this;
    
    if (userRole.isModified("password")) {
        bcrypt.genSalt(saltRounds, function(error, salt) {
            if (error) {
                return next(error); // If error occur, stop
            }
            
            bcrypt.hash(userRole.password, salt, function(error, hash) {
                if (error) {
                    return next(error); // If error occur, stop
                }
                userRole.password = hash;
                return next(); // If no error, change password
            });
        });
    }
})

UserRoleSchema.methods.comparePassword = function(plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, function(error, isMatch) {
       if (error) {
           return callback(error);
       }
       callback(null, isMatch);
    });
};

const UserRole = mongoose.model("UserRole", UserRoleSchema);

module.exports = UserRole;