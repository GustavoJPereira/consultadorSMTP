const nodemailer = require("nodemailer");
let data = require("./data.json");

;const transporter = nodemailer.createTransport({
    host: data.host,
    port: data.port,
    auth: {
        user: data.user,
        pass: data.pass
    }
});

sendMail();
async function sendMail() {
    await transporter.sendMail({
        from: data.user,
        to: data.to,
        subject: "Teste de funcionamento de e-mail",
        html: "<h1>Funcionando</h1>"
    });
}