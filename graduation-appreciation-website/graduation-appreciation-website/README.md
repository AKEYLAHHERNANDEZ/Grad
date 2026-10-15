# A Little Graduation Surprise ♡

A mobile-friendly appreciation website for your mom, sister, and stepdad. It is a static site, so it can be hosted for free on GitHub Pages.

## What's included

- One shared landing page with a choice for Mom, Sister, or Stepdad
- Separate personalized appreciation letters
- Photo slots for `images/mom.jpg`, `images/sister.jpg`, and `images/stepdad.jpg`
- Responsive layout for phones and desktops
- No build tools or package installation required

## 1. Add their photos

Inside this project folder, open the `images` folder and replace the placeholder files with your own photos.

- Use a photo of your sister named exactly `sister.jpg`
- Use a photo of your mom named exactly `mom.jpg`
- Use a photo of your stepdad named exactly `stepdad.jpg`

JPG photos are recommended. You can crop them first so the people are centered. If your photo files are PNG, either convert them to JPG or update the matching filenames in `index.html` and `script.js`.

**Privacy tip:** Only add photos you are comfortable making available to anyone who has the website link. GitHub Pages websites are public unless you use a different private hosting setup.

## 2. Preview it on your computer

The simplest way:
1. Open the project folder.
2. Double-click `index.html`.
3. It should open in your browser. Click the Mom and Sister cards to test the letters.

You can also open the folder in VS Code and use the Live Server extension, if you have it.

## 3. Publish with GitHub Pages

1. Sign in to GitHub and create a **new repository**. For example, call it `graduation-surprise`.
2. For the easiest setup, set the repository to **Public**.
3. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `images` folder to the repository's root (not inside another nested project folder).
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. Wait a few minutes. The Pages section will show your published website URL. It will usually look like:
   `https://YOUR-USERNAME.github.io/graduation-surprise/`

Your actual URL depends on your GitHub username and repository name. Use the exact URL shown in the Pages settings.

## 4. Make one shared QR code

After the website is published:
1. Open the live website URL on your phone or computer and make sure both letters and photos work.
2. Copy the full website URL, including the final slash if shown.
3. Use a reputable QR code generator, such as Canva's QR code tool or another generator you trust.
4. Paste the website URL and create a QR code.
5. Download the QR code as a high-quality PNG or SVG.
6. Scan it with your phone before printing it on a card or placing it in a frame.

The shared QR code opens the landing page. Your family can each tap their own card to read a personal letter.

## 5. Updating the site later

Edit the files on GitHub and commit the changes. GitHub Pages will publish the updated site automatically after deployment finishes. If you change the letters, you only need to edit the paragraph text in `script.js`.

## Troubleshooting

- **The site shows a 404:** Check Settings → Pages and confirm `index.html` is in the repository root.
- **Photos don't appear:** Confirm the folder is named `images` and the filenames are exactly `mom.jpg` and `sister.jpg` (filenames are case-sensitive on hosting).
- **The site hasn't updated:** Wait a few minutes and refresh. Check the repository's Actions tab if deployment seems to have failed.
- **QR code doesn't work:** Scan the QR code and verify it contains the full published URL, not a local file path.

## Important

A GitHub Pages website is public. The QR code isn't a password; anyone who gets a copy of it or the link may be able to open the site. Avoid putting private information on the page.
