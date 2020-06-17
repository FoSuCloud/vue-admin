module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-irregular-whitespace":process.env.NODE_ENV === "production" ? "warn" : "off",
    "eslint-disable-next-line":process.env.NODE_ENV === "production" ? "warn" : "off",
    "eslint-disable":process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
