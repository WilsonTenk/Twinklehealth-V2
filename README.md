# Twinkle Health Foundation

A modern, responsive website for Twinkle Health Foundation - a healthcare NGO serving communities in Ghana.

## Features

- 🏥 Health Education Through Drama
- 💊 Free Medical Services
- 🤝 Community Needs Support
- 💼 Livelihood Empowerment
- 👕 Clean Clothing Drive
- 💬 Focus Group Discussions

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Deploy to GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

Quick steps:
1. Push code to GitHub
2. Enable GitHub Pages in repository settings (use GitHub Actions)
3. The site will automatically deploy on push to `main` branch

## Project Structure

```
├── public/
│   ├── images/          # All site images
│   └── logo.png         # Site logo
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   ├── index.tsx        # Entry point
│   └── types.ts         # TypeScript types
├── .github/
│   └── workflows/       # GitHub Actions workflows
└── dist/                # Build output (generated)
```

## License

Private - Twinkle Health Foundation
