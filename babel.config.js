module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    ["@babel/preset-env", { modules: false }],
  ],
  /* 按需引入 */
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
