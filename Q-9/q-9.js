const mysql = require("mysql");


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'node_ass'
});


const selectAllEmployees = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM emp_TB", (err, result, fields) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    })
}


con.connect((err) => {
    if (err) {
        console.log("er at con: " + err)
    } else {


        //inserting record in employee table
        con.query("INSERT INTO emp_TB values(1003,'xyz',29)", (err, result) => {
            if (err) {
                console.log("error at insert: " + err)
            } else {
                console.log("record inserted")
            }
        })


        selectAllEmployees().then(result => {
            console.log(result)
        }).catch(err => {
            console.log("error at fetching: " + err)
        })
    }
})

