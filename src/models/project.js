const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
    },
    projectTheme: {
        type: String
    },
    features: {
        type: String,
    },
    heroImgPath: {
        type: String,
    },
    completedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Project", projectSchema);