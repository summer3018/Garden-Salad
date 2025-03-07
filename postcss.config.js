module.exports = {
    plugins: [
      require('css-declaration-sorter')({
        order: 'concentric-css' // MACSSルールに基づいた並び順
      }),
    ],
  };