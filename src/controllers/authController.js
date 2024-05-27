const User = require("../models/User");
const registerValidator = require("../validators/registerValidator");
const loginValidator = require("../validators/loginValidator");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    try {
        const { error } = registerValidator.validate(req.body)
        if (error) {
            return res.status(400).json(error);
        }
        const { email, password, role } = req.body;
        let user = await User.findOne({ email })
        if (user) return res.status(400).json({ error: "Already Exist Email" })
        
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ email, password: hashedPassword, role })
        await user.save();
        res.status(201).json({ message: "User registered successfully" })

    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const login = async (req,res) => {
    try {
        const { error } = loginValidator.validate(req.body);
        if (error) return res.status(400).json(error);
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        const hashedPassword = await bcrypt.compare(password, user.password);
        if (!hashedPassword) {
            return res.status(400).json({ message: "Password Not Matched" })
        }
        if (process.env.API_SECRET) {
            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                process.env.API_SECRET,
                { expiresIn: "1h" },
            );
            return res.status(200).json({token})
        }
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}
module.exports = { register, login };