require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties", 
    ["module-resolver", {
      "alias": {
        "^react-native$": "react-native-web"
      }
    }]
  ]
});
