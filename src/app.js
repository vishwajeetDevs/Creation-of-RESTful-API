const express = require ("express");
require("../src/db/conn");
const app = express ();
const port = process.env.PORT || 3000;
app.get ("/", async (req, res) => {
    res.send("Hello from the Vishwajeet");
})
app.listen(port, ()=>{
    console.log(`Connection is Live at port ${port}`);
})