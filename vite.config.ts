import react from "@vitejs/plugin-react-swc";
import { PluginOption, defineConfig } from "vite";

function MarkdownHotReload(): PluginOption {
  return {
    name: "markdown-hot-reload",
    handleHotUpdate({ file, server }) {
      if (!!file.match(/^.+\.(md|markdown)$/gim)) {
        console.log("Markdown file updated");
        server.ws.send({
          type: "custom",
          event: "markdown-update",
        });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), MarkdownHotReload()],
  assetsInclude: ["**/*.md"],
});
