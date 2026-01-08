# XENEX Website

A premium, cinematic website for XENEX - a car transformation company that creates characters, not just modifications.

## Features

- **Story-driven Design**: Cinematic, visual-first approach
- **Responsive Layout**: Works beautifully on all devices
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **All Pages Implemented**:
  - Home (Hero, Featured Builds, Film Highlight, Design Philosophy)
  - About XENEX (Origin Story, Vision, Expertise, Brand Values)
  - XENEX Builds (Story-driven build cards with Before/After)
  - Film & Cinema Cars (Cinematic car projects)
  - Design Process (4-step storytelling journey)
  - Gallery (Photo and video grids with filtering)
  - Media / Press (Film projects, features, credibility)
  - Contact (High-conversion form with WhatsApp integration)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About XENEX page
│   ├── builds/         # XENEX Builds page
│   ├── contact/        # Contact page
│   ├── design-process/ # Design Process page
│   ├── film-cars/      # Film & Cinema Cars page
│   ├── gallery/        # Gallery page
│   ├── media/          # Media / Press page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the XENEX color palette:
- `xenex-dark`: Primary dark background
- `xenex-gold`: Accent gold color
- `xenex-accent`: Secondary accent color

### Images

Replace placeholder images with your actual car photos. Update image URLs in:
- `app/page.tsx` (Home page)
- `app/builds/page.tsx` (Builds page)
- `app/gallery/page.tsx` (Gallery page)
- Other pages as needed

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- Replace WhatsApp number: `919876543210` with your actual number

### Hero Video

Add your hero video to `public/hero-video.mp4` or update the video source in `app/page.tsx`.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Next/Image**: Optimized image loading

## Notes

- The website uses placeholder images from Unsplash. Replace these with your actual car photos.
- WhatsApp integration links to a placeholder number. Update with your actual WhatsApp business number.
- Form submissions currently log to console. Connect to your backend/email service for production.

## License

All rights reserved © XENEX








