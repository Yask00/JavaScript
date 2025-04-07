export const mfConfig = {
  name: "home",
  exposes: {
    "./Header": "./src/Header",
    "./Footer": "./src/Footer",
  },
  shared: ["react", "react-dom"],
};
