// Настройка MathJax: формулы из pymdownx.arithmatex, нумерация в стиле amsmath.
// Сам MathJax (tex-svg.js) лежит рядом, а не на CDN.
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: "ams",
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
};
