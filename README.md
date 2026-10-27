# SIICVPRP Website (English + Bengali)

## Files and folders

- `index.html` — website content and course cards
- `styles.css` — responsive website design
- `script.js` — language switch, mobile menu and WhatsApp enquiry form
- `assets/siicvprp-logo.png` — the logo you supplied
- `assets/posters/` — upload/replace square (1:1) course posters here
- `assets/brochures/` — upload course/programme PDFs here

## Replace each course poster

Keep these exact filenames, or update the matching `src` path in `index.html`:
- `assets/posters/school-classes.svg`
- `assets/posters/photography.svg`
- `assets/posters/psychology.svg`
- `assets/posters/telemedicine.svg`
- `assets/posters/counselling.svg`
- `assets/posters/meditation.svg`

To use your own poster, upload a square image (recommended 1080×1080 px) to `assets/posters/` and change the corresponding image `src` in `index.html`, for example:
`src="assets/posters/photography-poster.jpg"`

## Add the programme brochure PDF for each course

Upload the PDF files to `assets/brochures/` using these exact names:
- `school-classes.pdf`
- `photography.pdf`
- `psychology.pdf`
- `telemedicine.pdf`
- `counselling.pdf`
- `meditation.pdf`

The brochure links already point to these paths. Until you upload each PDF, that link will not open a brochure. You can alternatively change the `href` for the matching `a` element in `index.html`.

## Contact details currently configured

- Email: `siicvprp@gmail.com`
- Telephone: `033-2669-1048`
- Mobile: `8961426974`
- WhatsApp: `https://wa.me/918961426974`
- Address: Jhorehat Rajbanshi Para, Jhorehat, Andul, Howrah – 711302, West Bengal, India

## Enquiry form behaviour

The form is free and static: it prepares a WhatsApp message for `+91 8961426974`. Visitors review and send the message themselves. It does not store form submissions or send email automatically.

## Publish on GitHub Pages

1. Sign in at https://github.com/.
2. Create a **Public** repository named `siicvprp-website`.
3. Extract the ZIP on your computer.
4. Upload the contents of this folder to the repository root: `index.html`, `styles.css`, `script.js`, `README.md`, and the full `assets` folder.
5. Click **Commit changes**.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Select branch `main` and folder `/(root)`, then click **Save**.
9. Wait a few minutes and open the URL shown in Settings → Pages. It will look like `https://YOUR-USERNAME.github.io/siicvprp-website/`.

## Updating the site later

Whenever you need to change text, upload a poster/PDF, or replace a logo, open the repository on GitHub, select the file, and use the pencil (Edit) or **Add file → Upload files**. Commit the changes; GitHub Pages republishes the site automatically.

## Notes

- GitHub Pages is static hosting; it does not provide a database or server-side form processing.
- Check course availability, fees and schedules before publishing claims about them.
- The telemedicine/counselling cards are enquiry/information pages, not a claim that any particular medical service is currently available.
