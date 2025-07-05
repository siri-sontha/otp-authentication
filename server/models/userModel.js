import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    verifyOtp: {type: String, default: ''},
    verifyOtpExpiresAt: {type: Number, default: 0},
    isAccVerified: {type: Boolean, default: false},
    resetOtp: {type: String, default: ''},
    resetOtpExpiresAt: {type: Number, default: 0},
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel