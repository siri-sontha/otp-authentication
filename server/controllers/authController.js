import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"
import transporter from "../config/nodemailer.js"

export const register = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.json({ success: false, message: "Missing Details" })
    }

    try {
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.json({ success: false, message: "User Already Exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new userModel({ email, password: hashedPassword })
        await user.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })

        return res.json({ success: true, message: "User registered successfully" })
    }

    catch (error) {
        res.json({ success: false, message: error.message })
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.json({ success: false, message: "Email and Password are required" })
    }

    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid Email" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })

        //Sending Welcome Email
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Test Email from Siri App',
            text: 'Hello! This is a test email to confirm SMTP is working.'
        }


        console.log("📧 Sending email with options:", mailOptions);

        await transporter.sendMail(mailOptions)
            .then(info => console.log("✅ Email sent:", info))
            .catch(err => console.error("❌ Email sending failed:", err));

        return res.json({ success: true, message: "Login successful" })
    }

    catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })

        return res.json({ success: true, message: "Logged Out" })
    }

    catch (error) {
        return res.json({ success: false, message: error.message })
    }
}