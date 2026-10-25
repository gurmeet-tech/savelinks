# OurFlex Button System

Reusable button components for PrepVault following design2.md specifications.

## Primary Button
```tsx
<button
  className="relative overflow-hidden inline-flex items-center justify-center gap-1.5 h-[32px] px-[14px] rounded-lg text-[14px] font-medium text-surface bg-[linear-gradient(180deg,#5A92FF_0%,#3F80FF_100%)] border border-[#2F67E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(47,103,230,0.4),0_1px_1px_rgba(63,128,255,0.16)] hover:bg-[linear-gradient(180deg,#6A9AFF_0%,#4F87FF_100%)] active:bg-[linear-gradient(180deg,#3F80FF_0%,#2F67E6_100%)] transition-all duration-150 active:scale-[0.98]"
>
  {children}
</button>
```

## Secondary Button
```tsx
<button
  className="relative overflow-hidden inline-flex items-center justify-center gap-1.5 h-[32px] px-[14px] rounded-lg text-[14px] font-medium text-on-surface bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(229,231,235,0.9),0_1px_1px_rgba(16,24,40,0.01)] hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F6F7_100%)] transition-all duration-150 active:scale-[0.98]"
>
  {children}
</button>
```

## Usage Notes
- Height: 32px
- Padding: 14px horizontal
- Radius: 10px (rounded-lg)
- Font: 14px, weight 500
- Primary: blue gradient with bevel + dot-grid ripple on click
- Secondary: white/gray gradient with subtle bevel
- Add `active:scale-[0.98]` for tactile feedback
- Use `relative overflow-hidden` for ripple animations
```

## Click Animation
Use the grid ripple pattern from `src/app/globals.css`:
```css
@keyframes btn-dot-fill {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0.25; }
  100% { transform: translate(-50%, -50%) scale(3.5); opacity: 0; }
}
.btn-grid-ripple {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  pointer-events: none;
  background-image: radial-gradient(circle at 2px 2px, rgba(63, 128, 255, 0.22) 1px, transparent 0);
  background-size: 4px 4px;
  animation: btn-dot-fill 380ms ease-out forwards;
}
```

If using `Button` component from `src/components/ui/button.tsx`, it handles this automatically.
