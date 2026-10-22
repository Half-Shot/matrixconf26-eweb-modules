import { readFile } from "node:fs/promises";
import { defineConfig, type Plugin } from "vite";

/**
 * Dev server for working on Element Web modules:
 *  - `/`             -> the prebuilt Element Web in `webapp/`
 *  - `/config.json`  -> `config.json` in the project root (instead of `webapp/config.json`)
 *  - `/modules/*`    -> `src/*`, compiled on the fly by Vite
 */
function elementWebDevServer(): Plugin {
    return {
        name: "element-web-dev-server",
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                const path = req.url?.split("?")[0];

                if (path === "/config.json") {
                    res.setHeader("Content-Type", "application/json");
                    res.setHeader("Cache-Control", "no-cache");
                    res.end(await readFile("config.json"));
                    return;
                }

                if (path === "/" || path === "/index.html") {
                    // Inject the Vite client so the page reloads whenever a module changes.
                    const html = await readFile("webapp/index.html", "utf-8");
                    res.setHeader("Content-Type", "text/html");
                    res.setHeader("Cache-Control", "no-cache");
                    res.end(html.replace("</head>", `<script type="module" src="/@vite/client"></script></head>`));
                    return;
                }

                if (req.url?.startsWith("/modules/")) {
                    req.url = req.url.replace(/^\/modules\//, "/src/");
                }
                next();
            });
        },
    };
}

export default defineConfig({
    // Element Web is already built, so serve it as-is rather than letting Vite transform it.
    publicDir: "webapp",
    server: {
        port: 3000,
        strictPort: true,
    },
    optimizeDeps: {
        entries: ["src/**/*.ts"],
    },
    plugins: [elementWebDevServer()],
});
