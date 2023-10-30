const path = require("path"); // Подключаем модуль 'path' из Node.js
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Подключаем плагин

module.exports = {
  entry: "./src/index.js", // Указываем точку входа для webpack
  output: {
    path: path.resolve(__dirname, "dist"), // Указываем путь для сохранения собранного бандла
    filename: "bundle.js", // Указываем имя собранного файла
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Указываем, что webpack должен обрабатывать файлы с расширениями .js и .jsx
        exclude: /node_modules/, // Исключаем папку node_modules из обработки
        use: {
          loader: "babel-loader", // Используем babel-loader для транспиляции кода
          options: {
            presets: ["@babel/preset-react"], // Добавьте сюда пресет
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Указываем расширения файлов, которые webpack будет искать по умолчанию
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <title>My App</title>
          </head>
          <body>
            <div id="root"></div>
          </body>
        </html>
      `,
    }),
  ],
};
