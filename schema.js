const mongoose = require("mongoose");

const accountInfo = new mongoose.Schema(
  {
    account: {
      type: Boolean,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    equity: {
      type: Number,
      required: true,
    },
  },
  {
    autoIndex: true,
    versionKey: false,
    collection: "accountinfo",
  }
);

// mongoose.model("accountinfo", accountInfo);
module.exports = mongoose.model("accountinfo", accountInfo);
