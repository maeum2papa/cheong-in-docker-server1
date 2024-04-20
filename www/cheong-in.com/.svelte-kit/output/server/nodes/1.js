

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e2ed5db5.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js","_app/immutable/chunks/stores.c8b61818.js","_app/immutable/chunks/singletons.b027321c.js"];
export const stylesheets = [];
export const fonts = [];
