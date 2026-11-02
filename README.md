# Sentinel - Cyber Safety Awareness

Full project source, organized into a frontend and a backend.

## Project structure
- `frontend/` - English home page, 15 guides, CSS, JavaScript, images, video catalog, mobile preview, and phone-friendly PDF.
- `backend/server.js` - optional Node.js server for static files and the `/api/videos` endpoint.
- `START-WEBSITE.bat` - Windows launcher for the local website.
- `package.json` - `npm start` command.

## Run locally
1. Install Node.js.
2. Run `START-WEBSITE.bat`, or run `npm start` in this folder.
3. Open `http://127.0.0.1:3000/`. The server prints a same-Wi-Fi link for phone preview.

## GitHub Pages
Upload all contents to the repository root and enable Pages from the `main` branch root. The root `index.html` redirects to `frontend/index-en.html`. GitHub Pages serves the static frontend; it does not run the Node.js backend. The frontend uses a fallback video catalog on static hosting. Deploy the Node.js backend separately if you need the API online.

YouTube videos are linked/embedded from YouTube and need an internet connection; the video files are not bundled.

## Public contact
The footer contains the site owner's phone number. The email address has been omitted from the website and this public-ready package.
