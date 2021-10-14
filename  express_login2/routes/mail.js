const router = require("express")();
const mailer = require("../controller/mail");
const Check = require("./check");

let authNum;

router.post("/mail", (req, res) => {

    const { email } = req.body;
    
    authNum = Math.random().toString().substr(2,6);

    const emailParam = {
        toEmail: email,
        subject: "New Email",
        text: authNum
    };
    
    mailer.sendGamil(emailParam);

    res.status(200).send("이메일 발송 성공");
    console.log(authNum);
});

router.use("/mail", Check);

module.exports = {
    mail:router,
    authNum: authNum,
};