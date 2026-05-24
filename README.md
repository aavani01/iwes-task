# UI Component Library Demo

A small reusable Angular UI component library built as a take-home task for Fraunhofer IWES.  
The project demonstrates reusable standalone components through a simple wind farm monitoring dashboard.

---

## Setup

### Prerequisites

- Node.js >= 18
- Angular CLI

```bash
npm install -g @angular/cli
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

---

## Components

- `lib-button`
  - Configurable label
  - Primary/secondary variants
  - Disabled state
  - Click event handling using `@Output()`

- `lib-card`
  - Configurable title and content
  - Optional clickable state
  - Card selection event handling

- Demo dashboard page showing component interaction and state management

---

## Project Structure

```text
src/app/
├── components/
│   ├── button/
│   └── card/
└── pages/
    └── demo-page/
```

---

## Design Decisions

- Standalone Angular components for reduced boilerplate
- Reusable and configurable component APIs
- Parent-managed state for cleaner separation of concerns
- SCSS with BEM naming for maintainable styling
- Dynamic rendering using Angular control flow syntax

---

## Technologies

- Angular 19
- TypeScript
- SCSS