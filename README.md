# Frontend Security Checklist

Interactive checklist for reviewing common front-end security risks in web applications.

## Live demo

https://frontend-security-checklist.vercel.app

## Goal

This project connects front-end development experience with Cyber Security fundamentals. It focuses on practical review points that appear in real web applications:

- token storage risks
- authentication and authorization boundaries
- sensitive data exposure
- CORS basics
- security headers
- front-end validation limits
- form safety
- login security

## Stack

- React
- Vite
- Tailwind CSS
- lucide-react

## Features

- PT/EN language switch
- risk filter by severity
- interactive checklist progress
- controlled examples comparing insecure and safer patterns
- security score analyzer with weighted risk recommendations
- responsive sidebar and mobile navigation

## Project structure

```text
src/
  components/          Reusable UI sections and cards
  lib/                 Checklist content, translations, constants and helpers
  App.jsx              Application state and view composition
  index.css            Tailwind theme tokens and global styles
```

## Design System

The interface follows the BG Cyber Security design system:

- dark tech theme
- Jost for UI text
- Share Tech Mono for technical data
- cyan, green, amber, and red semantic states
- compact dashboard layout

## Run locally

```bash
npm install
npm run dev
```

## Portfolio angle

This project is designed to be published on GitHub and LinkedIn as an entry-level Cyber Security portfolio item, especially for a profile moving from Front-End/UI/UX into Web Security or Application Security.
