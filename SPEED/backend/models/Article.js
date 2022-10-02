const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);