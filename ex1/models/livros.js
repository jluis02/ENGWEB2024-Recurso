const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  _id: String,
  title: String,
  series: String,
  author: [String],
  rating: String,
  description: String,
  language: String,
  isbn: String,
  genres: [String],
  characters: [String],
  bookFormat: String,
  edition: String,
  pages: Number,
  publisher: String,
  publishDate: String,
  coverImg: String,
  bbeScore: Number,
  bbeVotes: Number,
  price: String
}, { versionKey: false });

module.exports = mongoose.model('livros', bookSchema);