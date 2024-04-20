

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/case/_id_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.3f4c2383.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js","_app/immutable/chunks/navigation.96c7a561.js","_app/immutable/chunks/singletons.b027321c.js","_app/immutable/chunks/api.3f2b77bb.js","_app/immutable/chunks/stores.c8b61818.js"];
export const stylesheets = ["_app/immutable/assets/4.61ad464f.css"];
export const fonts = [];
