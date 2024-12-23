const mongoose = require("mongoose")

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    post: {
        type: String,
        default: "Developer"
    },
    imagePath: {
        type: String,
    },
    company: {
        type: String,
        default: "Metalogic",
    }
});

module.exports = mongoose.model("Member", memberSchema);