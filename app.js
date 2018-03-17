Reveal.initialize({
  dependencies: [
    // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
    { 
      src: 'bower_components/reveal.js/lib/js/classList.js', 
      condition: function () { return !document.body.classList; } 
    },

    // Interpret Markdown in <section> elements
    { 
      src: 'bower_components/reveal.js/plugin/markdown/marked.js', 
      condition: function () { return !!document.querySelector('[data-markdown]'); } 
    },

    { 
      src: 'plugin/markdown/markdown.js', 
      condition: function () { return !!document.querySelector('[data-markdown]'); } 
    },

    // Syntax highlight for <code> elements
    { 
      src: 'bower_components/reveal.js/plugin/highlight/highlight.js', 
      async: true, 
      callback: function () { hljs.initHighlightingOnLoad(); } 
    },

    // Zoom in and out with Alt+click
    { 
      src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', 
      async: true 
    },

    // Speaker notes
    { 
      src: 'bower_components/reveal.js/plugin/notes/notes.js', 
      async: true 
    },

    // MathJax
    { 
      src: 'bower_components/reveal.js/plugin/math/math.js', 
      async: true 
    }
  ]
});