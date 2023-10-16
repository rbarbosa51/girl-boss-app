// vite.config.ts
import { defineConfig } from "file:///Users/Rafael/Deleteme/DeleteRealQuick/girl-boss-app/girl3/girl-boss-app/node_modules/vite/dist/node/index.js";
import react from "file:///Users/Rafael/Deleteme/DeleteRealQuick/girl-boss-app/girl3/girl-boss-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import htmlMinifier from "file:///Users/Rafael/Deleteme/DeleteRealQuick/girl-boss-app/girl3/girl-boss-app/node_modules/vite-plugin-html-minifier/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/Rafael/Deleteme/DeleteRealQuick/girl-boss-app/girl3/girl-boss-app";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    htmlMinifier({
      minify: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    open: true,
    port: 3e3,
    proxy: {
      "/mongo": "http://localhost:5000"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvUmFmYWVsL0RlbGV0ZW1lL0RlbGV0ZVJlYWxRdWljay9naXJsLWJvc3MtYXBwL2dpcmwzL2dpcmwtYm9zcy1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9SYWZhZWwvRGVsZXRlbWUvRGVsZXRlUmVhbFF1aWNrL2dpcmwtYm9zcy1hcHAvZ2lybDMvZ2lybC1ib3NzLWFwcC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvUmFmYWVsL0RlbGV0ZW1lL0RlbGV0ZVJlYWxRdWljay9naXJsLWJvc3MtYXBwL2dpcmwzL2dpcmwtYm9zcy1hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBodG1sTWluaWZpZXIgZnJvbSBcInZpdGUtcGx1Z2luLWh0bWwtbWluaWZpZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGh0bWxNaW5pZmllcih7XG4gICAgICBtaW5pZnk6IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogdHJ1ZSxcbiAgICBwb3J0OiAzMDAwLFxuICAgIHByb3h5OiB7XG4gICAgICBcIi9tb25nb1wiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFksU0FBUyxvQkFBb0I7QUFDdmEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGtCQUFrQjtBQUh6QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsTUFDWCxRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
