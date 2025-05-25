module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
  testMatch: ["<rootDir>/**/*.(test|spec).js"],
  verbose: true,
  collectCoverage: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
