const Users = require("../models/user");
const bcrypt = require("bcrypt")

const authControllers = {
    register : async(req,res)=>{
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const newUSer = await new Users({
                username : req.body.username,
                email : req.body.email,
                password: hashed,
            })
            const accountUser = await newUSer.save();
            res.status(200).json(accountUser)
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = authControllers;