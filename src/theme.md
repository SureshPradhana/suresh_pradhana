# Suresh's Portfolio Theme Reference

Use this theme for all components and designs.

## 🎨 Color Palette

### Backgrounds
```css
--bg-primary: #0a0a0a;           /* Main background */
--bg-secondary: #0f0f0f;         /* Card backgrounds */
--bg-tertiary: #1a1a1a;          /* Elevated elements */
--bg-hover: rgba(38, 38, 38, 0.3); /* Hover states */
```

### Text Colors
```css
--text-primary: #d8dadb;         /* Main text */
--text-secondary: #a8a8a8;       /* Secondary text */
--text-muted: #737373;           /* Muted/disabled text */
--text-dim: #525252;             /* Very dim text */
```

### Border Colors
```css
--border-primary: #262626;       /* Main borders */
--border-secondary: #404040;     /* Lighter borders */
--border-subtle: rgba(38, 38, 38, 0.5); /* Subtle borders */
```

### Semantic Colors
```css
--success: #4ade80;              /* Success states */
--warning: #fbbf24;              /* Warning states */
--error: #ef4444;                /* Error states */
--info: #3b82f6;                 /* Info states */
```

## 🎯 Design Principles

### Style
- **Aesthetic**: Minimal, clean, developer-focused
- **Theme**: Dark mode only
- **Complexity**: Simple, no-nonsense
- **Emphasis**: Content-first, text-heavy

### Typography
```css
--font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */

--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Spacing
```css
--spacing-xs: 0.25rem;      /* 4px */
--spacing-sm: 0.5rem;       /* 8px */
--spacing-md: 1rem;         /* 16px */
--spacing-lg: 1.5rem;       /* 24px */
--spacing-xl: 2rem;         /* 32px */
--spacing-2xl: 3rem;        /* 48px */
--spacing-3xl: 4rem;        /* 64px */
```

### Border Radius
```css
--radius-sm: 0.375rem;      /* 6px */
--radius-md: 0.5rem;        /* 8px */
--radius-lg: 0.75rem;       /* 12px */
--radius-xl: 1rem;          /* 16px */
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
```

## 🧩 Component Patterns

### Cards
```css
.card {
  background: rgba(15, 15, 15, 0.5);
  border: 1px solid rgba(38, 38, 38, 0.5);
  border-radius: 0.75rem;
  padding: 1.5rem;
  color: #d8dadb;
}
```

### Buttons
```css
.button-primary {
  background: rgba(38, 38, 38, 0.4);
  color: #d8dadb;
  border: 1px solid rgba(64, 64, 64, 0.5);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.button-primary:hover {
  background: rgba(64, 64, 64, 0.4);
}
```

### Links
```css
.link {
  color: #d8dadb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.link:hover {
  color: #ffffff;
}
```

### Code Blocks
```css
.code-block {
  background: #000000;
  border: 1px solid rgba(38, 38, 38, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
  color: #d8dadb;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
}
```

### Inputs
```css
.input {
  background: transparent;
  border: 1px solid #262626;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #d8dadb;
  font-size: 1rem;
}

.input:focus {
  outline: none;
  border-color: #404040;
}
```

## 🎨 Tailwind Classes (If Using Tailwind)

### Backgrounds
- `bg-neutral-950` - Main background
- `bg-neutral-900/50` - Semi-transparent cards
- `bg-neutral-800/40` - Buttons/interactive elements
- `bg-black` - Code blocks

### Text
- `text-neutral-200` - Primary text
- `text-neutral-300` - Secondary text
- `text-neutral-400` - Muted text
- `text-neutral-500` - Very dim text

### Borders
- `border-neutral-800` - Primary borders
- `border-neutral-800/50` - Subtle borders
- `border-neutral-700` - Accent borders

### Effects
- `hover:bg-neutral-800/30` - Subtle hover
- `hover:bg-neutral-700/40` - Button hover
- `transition-colors` - Smooth transitions

## 📋 Usage Instructions

When creating components:

1. **Always use dark backgrounds** - Start with transparent or semi-transparent
2. **Text must be light** - Use `#d8dadb` or `text-neutral-200`
3. **Borders should be subtle** - Use low opacity grays
4. **Avoid bright colors** - Keep accent colors muted
5. **Use transparency** - Let components blend with background
6. **Minimize decorations** - No gradients, shadows should be subtle
7. **Focus on content** - Typography and readability first
8. **Keep it simple** - No complex animations or effects

## 🚀 Example Component Template

```jsx
export default function Component() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-neutral-200 mb-4">
          Title Here
        </h1>
        <p className="text-neutral-400 mb-8">
          Description here
        </p>

        {/* Card */}
        <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neutral-200 mb-3">
            Card Title
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Card content here
          </p>

          {/* Button */}
          <button className="mt-4 px-4 py-2 bg-neutral-800/40 text-neutral-200 rounded hover:bg-neutral-700/40 transition-colors">
            Click Me
          </button>
        </div>

        {/* Code Block */}
        <pre className="mt-6 bg-black text-neutral-300 p-4 rounded border border-neutral-800/50 overflow-x-auto">
          <code>console.log('Hello World');</code>
        </pre>
      </div>
    </div>
  );
}
```

## 🔗 Reference Links

- Portfolio: https://suresh-pradhana.vercel.app/
- Design Philosophy: Minimal, clean, developer-focused
- Tech Stack: Svelte/SvelteKit, Tailwind CSS

---

**Last Updated**: January 2026  
**Version**: 1.0  
**Author**: Suresh Pradhana
