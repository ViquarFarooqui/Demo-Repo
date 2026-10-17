var users = [{
    name: "john",
    kidney: [{
        healthy: false
    }]
}]
const express = require("express");
const app = express();
let s = 0;
app.get("/", function (req, res) {
    const johnkidneys = users[0].kidney;
    const kidneycount = johnkidneys.length;
    let helathyK = 0;
    for (let i = 0; i < kidneycount; i++) {
        if (johnkidneys[i].healthy == true) {
            helathyK++;
        }
    }
    s++;
    res.send({ kidneycount, helathyK, s });
})
app.post("/", function (req, res) {
    users[0].kidney.push({ healthy: false });
    res.send("kidney added");
})
app.put("/", function (req, res) {
    let len = users[0].kidney.length;
    for (let i = 0; i < len; i++) {
        users[0].kidney[i] = { healthy: true };
    }
    res.send("kidney updated");

})
app.delete("/", function (req, res) {
    users[0].kidney = [];
    res.send("kidney deleted");
})
app.listen(3001);