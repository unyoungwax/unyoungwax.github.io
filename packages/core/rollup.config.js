import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import postcssUrl from "postcss-url";
import del from "rollup-plugin-delete";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/index.ts",
  output: {
    dir: "./dist", // The output folder.
    format: "es", // Export as an ES module.
  },
  plugins: [
    del({
      targets: ["./dist"], // Clean the output folder.
    }),
    peerDepsExternal(), // Exclude peer dependencies from the output.
    nodeResolve({ // Find dependencies in node_modules folder.
      browser: true,
      preferBuiltins: true,
    }),
    commonjs({ // Convert CommonJS modules into ES modules.
      esmExternals: ["@solana/web3.js"], // Avoid importing the non-existent default export of @solana/web3.js package.
    }),
    json(), // Allow importing JSON files.
    image(), // Convert image files into Base64 strings.
    postcss({
      modules: true, // Use CSS modules.
      use: ["sass"], // Use SASS.
      plugins: [
        postcssUrl({
          url: "inline",
        }),
      ],
    }),
    typescript(),
  ],
  treeshake: {
    preset: "smallest",
  },
  strictDeprecations: true, // Throw an error when a deprecated feature is used.
};
