// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@babel/preset-env', 
    {targets: {node: 'current'}}], "@babel/preset-react"
  ],
};
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}], "@babel/preset-react"]
};