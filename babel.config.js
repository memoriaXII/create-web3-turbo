module.exports = {
  // rest of config
  plugins: [
    // other pluginsy
    [
      'babel-plugin-rewrite-require',
      {
        aliases: {
          stream: 'readable-stream',
        },
      },
    ],
  ],
}
