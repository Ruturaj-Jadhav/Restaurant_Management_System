const QRcode = require("qrcode");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var router = express.Router();
router.post("/generateQRcode", (req, res) => {
  QRcode.toFile(
    'table'+ req.table+ '.png',
    "https://blog.logrocket.com/create-read-qr-codes-node-js/#:~:text=To%20generate%20a%20QR%20code,at%20the%20specified%20file%20path.",
    {
      erroCorrectionLevel: "H",
    },
    function (err) {
      if (err) throw err;
      console.log("QR code generated");
    }
  );
});

module.exports = router;
