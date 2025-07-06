# SCT_WD_1
SkillCraft Technology Intership task 1
# 🌐 Responsive Navigation Menu for Landing Page

This project implements an interactive, fixed, and fully responsive navigation menu tailored for modern landing pages. Built using **HTML**, **CSS**, and **JavaScript**, it includes accessibility features, smooth transitions, mobile responsiveness, and a clean, modern design.

---

## 📌 Features Breakdown (Based on Prompt)

### 1. Menu Structure

- A horizontal navigation bar with **five clickable items**: Home, About, Services, Portfolio, Contact.
- Each item uses semantic `<a>` tags for clear link behavior.

### 2. Styling

- The navbar is **fixed at the top** (`position: fixed`) and stays visible while scrolling.
- Uses a **contrasting background color** to distinguish the navbar from content.
- Hover effects apply **color transitions** and **background changes** with smooth animation.

### 3. Interactive Features

- On hover, menu items change **background and text color** with smooth transition (`transition: all 0.3s ease`).
- When scrolling down, a **box-shadow** is added dynamically via JavaScript to increase visibility.

### 4. Responsive Design

- On **screens smaller than 768px**, the nav collapses into a **hamburger menu**.
- A hamburger button toggles visibility of the menu using JavaScript.
- The mobile menu stacks vertically and slides down when activated.

### 5. Accessibility

- ARIA attributes included:
  - `role="navigation"`
  - `aria-label`, `aria-controls`, `aria-expanded`
- Contrast levels meet **WCAG 2.1 AA** standards for readability and accessibility.
- Full keyboard accessibility support.

---

## 📁 Project Files

├── index.html # Navigation markup
├── style.css # Styling for desktop and mobile
├── script.js # Toggle and scroll behavior
└── README.md # Documentation
