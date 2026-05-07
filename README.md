# SudanBridge — Connecting Sudanese Youth With Global Talent

> A nonprofit community platform bridging Sudanese high school and university students with Sudanese professionals living abroad — through mentorship, career guidance, and community.

## Live Demo

Deployed on GitHub Pages: `https://<your-username>.github.io/<repo-name>/`

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + Vite 5 | Frontend framework + build tool |
| TailwindCSS 3 | Utility-first styling |
| Framer Motion 11 | Animations & transitions |
| Lucide React | Icon library |

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/<your-username>/sudanbridge.git
cd sudanbridge

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

---

## GitHub Pages Deployment

### Option 1 — Manual (simplest)

1. Set the `base` in `vite.config.js` to your repo name:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Push the `dist/` folder to the `gh-pages` branch:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

4. In your GitHub repo settings → **Pages** → set source to `gh-pages` branch.

### Option 2 — GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then push to `main` and GitHub Actions will deploy automatically.

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky nav with mobile menu
│   │   └── Footer.jsx          # Footer with links & social
│   ├── sections/
│   │   ├── Hero.jsx            # Full-viewport hero with animated globe
│   │   ├── Problem.jsx         # Problem statement with stats
│   │   ├── HowItWorks.jsx      # 4-step process
│   │   ├── MentorshipAreas.jsx # Career field cards
│   │   ├── Testimonials.jsx    # Testimonial carousel
│   │   ├── Resources.jsx       # Free resource cards
│   │   ├── CommunityImpact.jsx # Animated counters & world map
│   │   ├── Events.jsx          # Upcoming events/workshops
│   │   ├── MentorSpotlight.jsx # Featured mentor profiles
│   │   ├── FAQ.jsx             # Accordion FAQ
│   │   └── CallToAction.jsx    # Final CTA with three paths
│   └── ui/
│       ├── Button.jsx          # Reusable button component
│       ├── AnimatedCounter.jsx # Scroll-triggered number counter
│       └── SectionHeader.jsx   # Reusable section header
├── App.jsx                     # Root component
├── main.jsx                    # React entry point
└── index.css                   # Global styles + Tailwind
```

---

## Customization

### Colors
Edit `tailwind.config.js` to change the brand palette:
```js
brand: { 500: '#10b981' },  // Primary green
gold:  { 500: '#f59e0b' },  // Accent amber
```

### Content
All content (testimonials, mentor data, events, FAQ) is in the respective component files as plain JS arrays — easy to edit.

### Contact Email
Search and replace `hello@sudanbridge.org` with your real email address.

---

## Mission

> "Sudanese talent exists everywhere — and the next generation should not grow alone."

SudanBridge transforms brain drain into brain circulation by connecting the Sudanese diaspora with the youth at home through structured mentorship.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

MIT — free to use, adapt, and build upon.
