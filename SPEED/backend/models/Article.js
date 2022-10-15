const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  pubyear: {
    type: String,
    required: true
  },
  claim: {
    type: String,
    required: false
  },
  evidence: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  language:{
    type: String,
    required: false
  },
  source:{
    type: String,
    required: false
  },
  authoraffiliations:{
    type: String,
    required: false
  },
  isbn:{
    type: String,
    required: false
  },
  rights:{
    type: String,
    required: false
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);

/*
      authors: "Authors ...",
      pubyear: "Year Published ...",
      claim: "Artile Claim ...", 
      evidence: "Level of Evidence Supporting Claim ...",
      description: "Description of Article ...",
      language: "Language of Article ...",
      source: "Source of Article ...",
      authoraffiliations: "Author Affiliations ...",
      isbn: "Articles ISBN ...",
      rights: "Rights of Publication ..."
*/