import type { Config } from "tailwindcss";

const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { navy: "#102A62", royal: "#1748A5", gold: "#D7A738", ink: "#162039", mist: "#F6F8FD" }, boxShadow: { royal: "0 20px 45px rgba(23, 72, 165, .16)" } } }, plugins: [] };
export default config;
