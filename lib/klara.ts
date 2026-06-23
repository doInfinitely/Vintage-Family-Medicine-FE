// Opens the Klara floating widget by trying multiple strategies in sequence.
// Klara has no documented programmatic open API, so we try known push commands
// then fall back to clicking the launcher button in the DOM.
export function openKlaraWidget() {
  const w = (window as any).klaraWidget;

  for (const cmd of ['open', 'openWidget', 'show']) {
    try {
      w?.push([cmd]);
      return;
    } catch { /* command not supported — try next */ }
  }

  // DOM fallback: Klara renders a launcher button in the page; click it directly.
  for (const sel of [
    '[class*="klara-launcher"]',
    '[id*="klara-launcher"]',
    '[class*="klaraLauncher"]',
    'button[aria-label*="lara"]',
    '[data-testid*="klara"]',
    '[class*="widget-launcher"]',
  ]) {
    const el = document.querySelector<HTMLElement>(sel);
    if (el) { el.click(); return; }
  }
}
