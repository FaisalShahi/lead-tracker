# Leadvora

A premium lead tracking web app built for businesses, freelancers, agencies, and sales teams to capture leads, track follow-ups, and manage conversions efficiently.

Leadvora is designed with a modern SaaS experience and built as a Progressive Web App (PWA), so users can install it directly on mobile or desktop.

---

## Features

### Authentication
- Premium Login / Signup UI
- Responsive auth experience
- Ready for backend authentication integration

### Dashboard
- Lead overview stats
- Recent leads
- Follow-up reminders
- Quick actions

### Add Lead
- Manual lead entry
- Contact details
- Source tracking
- Lead status updates
- Priority & follow-up scheduling

### Progressive Web App
- Installable on mobile & desktop
- App-like fullscreen experience
- Fast loading
- Offline-ready foundation

---

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS

### Routing
- React Router DOM

### PWA
- vite-plugin-pwa

### Deployment
- Vercel

---

## Project Structure

```txt
src/
├── App.tsx
├── main.tsx
├── index.css

├── pages/
│   ├── AuthPage.tsx
│   ├── DashboardPage.tsx
│   └── AddLeadPage.tsx

├── components/
│   ├── AuthPanel.tsx
│   ├── AuthTabs.tsx
│   ├── InputField.tsx
│   ├── LeftShowcase.tsx
│   ├── LoginForm.tsx
│   └── SignupForm.tsx