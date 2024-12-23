const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    customerSince: {
        type: Date,
        default: Date.now,
    },
    review: {
        type: String,   
    }
});

module.exports = mongoose.model("Client", clientSchema);
