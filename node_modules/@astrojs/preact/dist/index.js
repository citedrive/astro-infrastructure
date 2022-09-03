function getRenderer() {
  return {
    name: "@astrojs/preact",
    clientEntrypoint: "@astrojs/preact/client.js",
    serverEntrypoint: "@astrojs/preact/server.js",
    jsxImportSource: "preact",
    jsxTransformOptions: async () => {
      const {
        default: { default: jsx }
      } = await import("@babel/plugin-transform-react-jsx");
      return {
        plugins: [jsx({}, { runtime: "automatic", importSource: "preact" })]
      };
    }
  };
}
function getCompatRenderer() {
  return {
    name: "@astrojs/preact",
    clientEntrypoint: "@astrojs/preact/client.js",
    serverEntrypoint: "@astrojs/preact/server.js",
    jsxImportSource: "react",
    jsxTransformOptions: async () => {
      const {
        default: { default: jsx }
      } = await import("@babel/plugin-transform-react-jsx");
      return {
        plugins: [
          jsx({}, { runtime: "automatic", importSource: "preact/compat" }),
          [
            "babel-plugin-module-resolver",
            {
              alias: {
                react: "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
                "react/jsx-runtime": "preact/jsx-runtime"
              }
            }
          ]
        ]
      };
    }
  };
}
function getViteConfiguration(compat) {
  const viteConfig = {
    optimizeDeps: {
      include: [
        "@astrojs/preact/client.js",
        "preact",
        "preact/jsx-runtime",
        "preact-render-to-string"
      ],
      exclude: ["@astrojs/preact/server.js"]
    },
    ssr: {
      external: ["preact-render-to-string"]
    }
  };
  if (compat) {
    viteConfig.optimizeDeps.include.push(
      "preact/compat",
      "preact/test-utils",
      "preact/compat/jsx-runtime"
    );
    viteConfig.resolve = {
      alias: [
        { find: "react", replacement: "preact/compat" },
        { find: "react-dom/test-utils", replacement: "preact/test-utils" },
        { find: "react-dom", replacement: "preact/compat" },
        { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" }
      ],
      dedupe: ["preact/compat", "preact"]
    };
    viteConfig.ssr.noExternal = [
      "react",
      "react-dom",
      "react-dom/test-utils",
      "react/jsx-runtime"
    ];
  }
  return viteConfig;
}
function src_default({ compat } = {}) {
  return {
    name: "@astrojs/preact",
    hooks: {
      "astro:config:setup": ({ addRenderer, updateConfig }) => {
        if (compat)
          addRenderer(getCompatRenderer());
        addRenderer(getRenderer());
        updateConfig({
          vite: getViteConfiguration(compat)
        });
      }
    }
  };
}
export {
  src_default as default
};
