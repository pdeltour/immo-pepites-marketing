# Immo Pepites Showcase Website

A showcase website for Immo Pepites built with React 17 and AWS Amplify.

## Tech Stack

- React 17
- AWS Amplify
- React Scripts 5.0.1

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- AWS Account (for Amplify deployment)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Initialize AWS Amplify (optional):
```bash
npm install -g @aws-amplify/cli
amplify init
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
immo-pepites-marketing/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── Features.js
│   │   ├── Features.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── aws-exports.js
│   └── reportWebVitals.js
├── package.json
└── README.md
```

## AWS Amplify Setup

To configure AWS Amplify services:

1. Initialize Amplify:
```bash
amplify init
```

2. Add services as needed:
```bash
amplify add auth    # Authentication
amplify add api     # API (REST/GraphQL)
amplify add hosting # Hosting
```

3. Push changes to AWS:
```bash
amplify push
```

## Deployment

### Deploy to AWS Amplify Hosting

```bash
amplify add hosting
amplify publish
```

## License

Private - All rights reserved
