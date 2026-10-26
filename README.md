# Portfolio

A responsive personal portfolio built with Next.js App Router, React, and CSS.
The UI is organized into reusable components, while profile details, project
copy, and capabilities live in one place.

## Project structure

```text
src/
├── app/             # Next.js routes, metadata, and global styles
├── components/
│   ├── layout/      # Site header and footer
│   ├── projects/    # Project cards and artwork
│   ├── sections/    # Homepage sections
│   └── ui/          # Shared interface elements
└── data/            # Portfolio content and site configuration
```

## Getting started

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Make it yours

1. Edit `src/data/portfolio.js` with your profile, contact details, project
   information, skills, services, learning topics, and verified experience.
2. Update the page title and descriptions in `src/app/layout.js`.
3. Set `NEXT_PUBLIC_SITE_URL` to your deployed site URL. The default is
   `https://yourdomain.com`; this value is used for metadata, `robots.txt`, and
   `sitemap.xml`.
4. Update `src/app/icon.svg` if you want a custom favicon, and add a social
   sharing image if you want custom branding.
5. Add your professional email, LinkedIn URL, resume PDF, project contribution
   details, and missing project metadata. The training and experience timeline
   contains clearly labeled fields for dates, course, and verified work history.

The project artwork is built from CSS and HTML, so the starter does not rely on
remote image services. Project entries describe the portfolio details provided;
verify current features, screenshots, project links, and your personal
contribution before publishing.

## Scripts

```bash
npm run dev    # Start the local development server
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Serve the production build
```

## Deploy

Deploy the `frontend` directory as a Next.js project on Vercel or another
Next.js-compatible host. Configure `NEXT_PUBLIC_SITE_URL` in the deployment
environment before building.
