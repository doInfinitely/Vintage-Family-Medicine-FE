// Opens the Klara floating widget.
//
// The widget bundle (widget-fe.klara.com/bundle.js) replaces window.klaraWidget
// with a command queue that accepts exactly two commands: "setWidgetId" and
// "embeddedMode". There is no "open" command — but embeddedMode sets
// widgetOpen=true, and passing an explicit `false` argument keeps
// embedded=false, so the widget opens in its normal floating layout.
// If the bundle hasn't loaded yet, klaraWidget is still a plain array and the
// command is queued and replayed on init.
export function openKlaraWidget() {
  const w = (window as any).klaraWidget;
  if (!w) return;
  try {
    w.push(['embeddedMode', false]);
  } catch {
    // Widget failed to initialize (script blocked, network error) — nothing to open.
  }
}
