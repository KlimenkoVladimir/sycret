const path = require("path");

module.exports = {
  entry: "./src/index.js", // Ваш основной файл проекта
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Папка, куда будет собран проект
    clean: true, // Очищает директорию dist перед обновлением бандла
  },
};
