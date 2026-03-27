import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
        key: fs.readFileSync("./certs/chowhjustin.ca.key"),
        cert: fs.readFileSync("./certs/chowhjustin.ca.pem")
    },
    host: true,
    port: 5173
  }
})