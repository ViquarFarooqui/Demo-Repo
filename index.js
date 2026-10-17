const express = require("express");
let sum = 0;
function sumCal(n) {
    for (let i = 0; i < n; i++) {
        sum++;
    }
    return sum;
}
let app = express()

app.get("/", function (req, res) {
    let n = req.query.n;
    const ans = sumCal(n);
    sum = 0;
    res.send(ans.toString());
})
app.listen(3000);