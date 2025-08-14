# Jesus Club CU Boulder

A mobile-first, light-theme website for Jesus Club (CU Boulder) inspired by thejesusclubs.com's bold look. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd SchoolClub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
SchoolClub/
├── app/
│   ├── (components)/          # React components
│   │   ├── Header.tsx         # Sticky navigation
│   │   ├── Hero.tsx           # Hero section with animated gradient
│   │   ├── About.tsx          # Mission and values
│   │   ├── Events.tsx         # Event cards
│   │   ├── GetInvolved.tsx    # CTA section
│   │   ├── FAQ.tsx            # FAQ accordion
│   │   ├── Footer.tsx         # Footer
│   │   └── JoinButton.tsx     # Reusable CTA button
│   ├── (lib)/                 # Utility functions
│   │   ├── useIsDesktop.ts    # Desktop detection hook
│   │   └── motion.ts          # Framer Motion config
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── netlify.toml              # Netlify deployment config
└── package.json
```

## 🎨 Design Features

- **Mobile-first**: Designed primarily for phone screens with desktop enhancements
- **Light theme**: Clean white background with black header
- **Typography**: Space Grotesk for headlines, Inter for body text
- **Accent color**: Modern violet (#6C5CE7) for CTAs and highlights
- **Animations**: Desktop-only scroll animations with Framer Motion
- **Accessibility**: WCAG AA compliant with semantic HTML

## 🚀 Deployment to Netlify

### Automatic Deployment

1. **Connect your repository to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub/GitLab/Bitbucket repository
   - Select the repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - The `netlify.toml` file is already configured

3. **Set up custom domain**
   - In Netlify dashboard, go to Site settings > Domain management
   - Add custom domain: `jesusclub.org`
   - Configure DNS records as instructed

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=.next
   ```

## 🔧 Customization

### Replacing Placeholder Assets

1. **Favicon**: Replace `public/favicon.ico`
2. **Social Image**: Replace `public/og-image.png` (1200x630px)
3. **Hero Video**: Add `public/hero-video.mp4` (optional)
4. **App Icon**: Replace `public/apple-touch-icon.png` (180x180px)

### Updating Content

- **GroupMe Link**: Update the URL in `JoinButton.tsx`
- **Event Images**: Replace Unsplash URLs in `Events.tsx`
- **FAQ Content**: Modify the `faqs` array in `FAQ.tsx`
- **Colors**: Update accent color in `tailwind.config.ts`

### SEO & Meta

- Update metadata in `app/layout.tsx`
- Replace Google verification code
- Update Open Graph and Twitter card images

## 📱 Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions

### Performance
- Optimized images with next/image
- Lazy loading for non-critical content
- Lighthouse scores ≥90 on mobile

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

### Motion & Animations
- Desktop-only scroll animations
- Respects `prefers-reduced-motion`
- Smooth hover effects
- Animated gradient backgrounds

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Netlify
- **Fonts**: Google Fonts (Space Grotesk, Inter)

## 📄 License

This project is for Jesus Club CU Boulder. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, contact the Jesus Club team or create an issue in the repository.
