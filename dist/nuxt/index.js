import path from"path";export default function nuxtVueFormulate(t){const o=Object.assign({},this.options.formulate,t);this.addPlugin({src:path.resolve(__dirname,"plugin.js"),options:o})};