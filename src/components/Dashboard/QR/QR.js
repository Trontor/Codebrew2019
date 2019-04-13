import React from "react";
import "./QR.css";
const QRcode = require("qrcode.react");

const QR = () => {
  return (
    <div className="card">
      <div class="card-body text-center">
        <p className="card-title title text-success">QR Code</p>
        <QRcode value="google.com" />
      </div>
    </div>
  );
};

export default QR;
