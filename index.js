const nodemailer = require("nodemailer");

const data = require("./data.json");
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
        to: data.user,
        subject: "Teste de funcionamento de e-mail",
        html: "<h1>Funcionando 2</h1>"
    });
}