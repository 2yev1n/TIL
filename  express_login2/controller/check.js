const router = require("../routes/check");
var authNum = require("../routes/mail");


const check = async(req, res) => {
    const { number } = req.body;

    console.log(authNum.authNum);
    console.log(number);
    try{
        if(authNum.authNum === number) {
            res.status(200).json({
                message: "인증번호 일치"
            });
        } else {
            res.status(409).json({
                message: "인증번호 불일치"
            });
        }
    } catch(err) {
        res.status(409).json({
            messagse: "오류"
        });
    }
};

module.exports = { check };