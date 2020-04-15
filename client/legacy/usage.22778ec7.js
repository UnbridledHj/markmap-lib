import{b as a,d as n,k as t,s as r,f as e,S as o,z as i,m as s,n as m,o as c,q as l,r as u,t as p,h,i as d,R as f,x as g}from"./client.c17ae35f.js";function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}function y(a){var n;return{c:function(){n=i("main")},l:function(a){n=s(a,"MAIN",{}),m(n).forEach(c)},m:function(t,r){l(t,n,r),n.innerHTML='<h1 id="usage">Usage</h1>\n<h2 id="command-line">Command-line</h2>\n<p>Either install it globally:</p>\n<pre><code class="language-bash">$ npm i -g markmap-lib\n$ markmap my-markdown.md</code></pre>\n<p>or use with <code>npx</code>:</p>\n<pre><code class="language-bash">$ npx markmap-lib my-markdown.md</code></pre>\n<h2 id="programmatic-usage">Programmatic usage</h2>\n<p>Make sure there is an SVG element in your DOM, say:</p>\n<pre><code class="language-html">&lt;svg id=&quot;mindmap&quot; style=&quot;width: 800px; height: 800px&quot;&gt;&lt;/svg&gt;</code></pre>\n<p>then we can mount the markmap to it:</p>\n<pre><code class="language-js">import { transform } from &#39;markmap-lib/dist/transform.common&#39;;\nimport { markmap } from &#39;markmap-lib/dist/view.common&#39;;\n\nconst md = `\n# hello\n\n- This is my Markdown.\n`;\n\nconst data = transform(md);\nmarkmap(&#39;#mindmap&#39;, data);</code></pre>\n<h2 id="related-projects">Related projects</h2>\n<ul>\n<li>Use with Vim / Neovim: <a href="https://github.com/gera2ld/coc-markmap">coc-markmap</a></li>\n<li>Use with GatsbyJS: <a href="https://github.com/gera2ld/gatsby-remark-markmap">gatsby-remark-markmap</a></li>\n</ul>\n',a[1](n)},p:u,i:u,o:u,d:function(t){t&&c(n),a[1](null)}}}function b(a,n,t){var r;return p((function(){f.highlightAllUnder(r)})),[r,function(a){g[a?"unshift":"push"]((function(){t(0,r=a)}))}]}var v=function(i){a(c,o);var s,m=(s=c,function(){var a,n=h(s);if(k()){var t=h(this).constructor;a=Reflect.construct(n,arguments,t)}else a=n.apply(this,arguments);return d(this,a)});function c(a){var o;return n(this,c),o=m.call(this),t(e(o),a,b,y,r,{}),o}return c}();export default v;