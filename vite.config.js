import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	// Set the base path for the application
	// This is necessary for deployment in a subdirectory
	// Ensure this matches the basename in Routing.jsx
	base: "/FournisseursFictifs/",
	plugins: [react(), tailwindcss()],
});
