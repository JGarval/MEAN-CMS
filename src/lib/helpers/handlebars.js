var htmlMinify = require('html-minifier').minify;

module.exports = {
  minify: minify
};

function minify(content) {
  return htmlMinify(content.fn(this), {
    removeComments: true,
    collapseWithespace: true,
    minifyJS: true
  });
}
