import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'frederique.klein91@ethereal.email',
        pass: 'huzsAQgqTDaFN1ndQU'
    }
});

export default transporter