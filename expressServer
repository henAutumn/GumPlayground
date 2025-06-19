// we need this to run a local host context instead of file
// so that we can  run enumerate devices( it mutbe run in a secure context)
// and localhost counts

const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname)));
app.listen(3000);
