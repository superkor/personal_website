# Personal Website

A static personal website built with React and Vite.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Hosting with Cloudflare Tunnel

1. Build the static site:
   ```
   npm run build
   ```

2. Install Cloudflare Tunnel (cloudflared):
   - Download from https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/

3. Authenticate:
   ```
   cloudflared tunnel login
   ```

4. Create a tunnel:
   ```
   cloudflared tunnel create <tunnel-name>
   ```

5. Configure DNS (point a subdomain to the tunnel):
   ```
   cloudflared tunnel route dns <tunnel-name> <subdomain>
   ```

6. Run the tunnel to serve the dist folder:
   ```
   cloudflared tunnel run <tunnel-name> --url http://localhost:8080
   ```

7. In another terminal, serve the dist folder (you can use a simple HTTP server):
   ```
   npx serve dist -p 8080
   ```

Now your website is accessible via the subdomain you configured.

## Customization

Edit the pages in `src/pages/` to customize the content.