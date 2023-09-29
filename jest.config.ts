module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "jest-transform-stub",
    "\\.(scss|css)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/(?!tsx-control-statements)"],
};
