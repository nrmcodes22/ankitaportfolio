export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-5 sm:px-8 py-10 text-sm text-[var(--ink-soft)]">
      <div className="border-t border-[var(--paper-line)] pt-6 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Aanya Verma</span>
        <span>Mathematics · Class 11–12</span>
      </div>
    </footer>
  );
}
