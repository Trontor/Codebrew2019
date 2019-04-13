import React from "react";
import "./QR.css";
const QRcode = require("qrcode.react");

const QR = () => {
  return (
    <div className="card">
      <div class="card-body text-center">
        <p className="card-title title text-success">QR Code</p>
        <QRcode value="https://trontor.github.io/Codebrew2019/#/Codebrew2019/profile/7" />
      </div>
    </div>
  );
};

export default QR;
