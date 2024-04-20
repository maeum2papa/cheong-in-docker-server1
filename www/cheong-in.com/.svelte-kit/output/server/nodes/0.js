

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b05cf6fa.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.c8b61818.js","_app/immutable/chunks/singletons.b027321c.js"];
export const stylesheets = ["_app/immutable/assets/0.f5c0b592.css"];
export const fonts = [];
