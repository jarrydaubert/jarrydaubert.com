export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 pt-6 text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
      <p>&copy; {year} Jarryd Aubert</p>
    </footer>
  );
}
