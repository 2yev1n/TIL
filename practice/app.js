require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes/user");
const { sequelize } = require("./models");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/", router);

app.set("jwt-secret", process.env.JWT_KEY);

sequelize.sync({force : false})
    .then(() => {
        console.log("database연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(PORT,"번 포트에서 대기 중");
});