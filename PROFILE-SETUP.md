# Personalize your cybersecurity portfolio

The portfolio is ready to customize. Before sending it to recruiters, update these sample details in `index-en.html`:

1. Your name, Vaibhav Daund, is now on the homepage.
2. Replace `YOUR.EMAIL@example.com` with the email address you want recruiters to use. Your portrait is now included at `assets/profile-photo.png`.
3. Rewrite the About paragraph with your real education, work experience, certifications, and the role you want.
4. In “Tools & Technologies,” keep only tools you have actually used. Add a level of experience only if you can explain it in an interview.
5. Add a résumé link and LinkedIn or GitHub links after you have the correct URLs.

The project description refers to the included Sentinel awareness website and its 15 linked guide pages. It does not claim that the email checker searches every website registration: it hands the visitor to an independent known-breach checker and does not send the email from this site.

## Run the video backend

The YouTube catalog is stored in `data/videos.json` and served by the Node.js endpoint `/api/videos` in `server.js`. For in-page YouTube playback, double-click `START-WEBSITE.bat`; it starts the local server and opens the website. The server gives YouTube the HTTP page origin needed for embedded playback. If you open `index.html` directly as a `file://` page, YouTube's player cannot play inline; the page will explain how to start the launcher.

To start the server manually from this folder, run:

```powershell
node server.js
```

Then open `http://127.0.0.1:3000`. To add or replace a video, update the JSON catalog with its YouTube video ID, title, publisher, description, and thumbnail alt text. The page keeps a local fallback so the video cards also show when opening `index.html` directly.


