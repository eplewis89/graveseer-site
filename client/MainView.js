import m from 'mithril';

export function MainView() {
  function view() {
    return m('div', [
      m("img", { src: "/images/graveseer-logo-dead.png" }),
      m("h3", { style: { "text-align": "center"}}, "website coming soon...")
    ]);
  }

  return { view };
}
