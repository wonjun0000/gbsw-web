const express = require("express")
const app = express()
const mysql = require("mysql2")
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "gbsw_web"
})

app.listen(3000, () => {
    console.log('3000번 포트 서버 대기중')
})

app.get("/", (req, res) => {
    res.send("나의 서버 입니다.")
})

app.get("/user", (req, res) => {
    conn.query("select * from user", (err, rows, fields) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
})

app.get("/user/:id", (req, res, next) => {
    if (req.params.id == "0") {
        next()
    }
    console.log(req.params.id)
})