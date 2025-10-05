# Layr(No Code Platform)

This is a **proof-of-concept no-code platform** built with [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).

The goal is to explore how **composable UI primitives** can serve as the foundation for a drag-and-drop / no-code builder experience.

⚠️ **Note:** This is an **experimental prototype**. It’s not production-ready.

---

## Features (so far)

- ⚡ Built with **React + Vite**
- 🎨 Styling with **Tailwind CSS**
- 🧩 UI powered by **shadcn/ui** components (Button, Card, Dialog, etc.)
- 🏗️ Early **drag-and-drop proof-of-concept**
- 🔧 Planned: **JSON → UI rendering** for dynamic layouts

---

## System Architecture (Tree Overview)

```
src/
├─ app/ # app shell & routing
│ ├─ appheader.tsx
│ └─ applayout.tsx
│
├─ components/  # reusable primitives & ui kit (shadcn)
│ ├─ layout/
│ | ├─ leftpanel.tsx
│ | ├─ propspanel.tsx
│ | └─ scroll-area.tsx
| |
│ ├─ ui/
│ │ ├─ button.tsx
│ │ ├─ input.tsx
│ │ ├─ separator.tsx
│ │ ├─ tabs.tsx
│ │ └─ tooltip.tsx
│
├─ editor/ # main builder/editor domain
│ ├─ canvas/
│ │
│ ├─ hierarchy/
│ │ ├─ HierarchyTree.tsx
│ │
│ ├─ palette/
│ │ ├─ ComponentPalette.tsx
|
├─ lib/
│ ├─ utils.ts
|
├─ types/
│ ├─ constants.ts
│ ├─ type.ts
|
├─ App.tsx
├─ index.css
└─ main.tsx
```

---

## Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React DnD](https://react-dnd.github.io/react-dnd/about) (for drag-and-drop prototyping)

---

## Clone the repo:

```bash
git clone https://github.com/Xaidel/Layr.git
cd Layr
```

## Installing dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```
