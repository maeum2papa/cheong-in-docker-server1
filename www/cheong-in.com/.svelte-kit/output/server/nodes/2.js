

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6d8b4e36.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js","_app/immutable/chunks/navigation.96c7a561.js","_app/immutable/chunks/singletons.b027321c.js","_app/immutable/chunks/api.3f2b77bb.js","_app/immutable/chunks/SlideTab.fdb49231.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/CaseList.6a59ddea.js"];
export const stylesheets = ["_app/immutable/assets/2.121a2f3d.css","_app/immutable/assets/SlideTab.241e9394.css","_app/immutable/assets/CaseList.29aa4a05.css"];
export const fonts = [];
