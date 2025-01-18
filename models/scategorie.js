const mongoose = require("mongoose");

const scategorieSchema = mongoose.Schema({
    nomscategorie: { type: String, required: true },
    imagescat: { type: String, required: false },
    categorieID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorie" // This should match the model name in categorie.js
    }
});

module.exports = mongoose.model("scategorie", scategorieSchema);
