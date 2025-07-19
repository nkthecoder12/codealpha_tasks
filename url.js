const db = require('../config/db');

function insertUrl(shortcode, longurl, callback) {
  db.run('INSERT INTO urls (shortcode, longurl) VALUES (?, ?)', [shortcode, longurl], callback);
}

function findUrlByShortcode(shortcode, callback) {
  db.get('SELECT longurl FROM urls WHERE shortcode = ?', [shortcode], callback);
}

module.exports = {
  insertUrl,
  findUrlByShortcode,
}; 