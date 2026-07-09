globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/kontakt-Dq9oVVp8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21b0-jBIxPHRvKTYOKS8jSD2w1Fjz2Pk\"",
		"mtime": "2026-07-09T20:24:26.372Z",
		"size": 8624,
		"path": "../public/assets/kontakt-Dq9oVVp8.js"
	},
	"/assets/LegalLayout-D18jv-lo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"102b-XZkq6NeDjhgiuR9K7XmkG+Ad6YM\"",
		"mtime": "2026-07-09T20:24:26.371Z",
		"size": 4139,
		"path": "../public/assets/LegalLayout-D18jv-lo.js"
	},
	"/assets/index-C4OMHEQU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54fd3-25o70d5J2wK+RVgjh0wdqItT6Ls\"",
		"mtime": "2026-07-09T20:24:26.371Z",
		"size": 348115,
		"path": "../public/assets/index-C4OMHEQU.js"
	},
	"/assets/mail-C8VbBZV6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-qkyeJ11JwNdhngTnuBx74PoJGik\"",
		"mtime": "2026-07-09T20:24:26.372Z",
		"size": 203,
		"path": "../public/assets/mail-C8VbBZV6.js"
	},
	"/assets/Navbar-Ccgaws6q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"119a-dcj1sKZbZmhC4reVUpl4fAYbJYA\"",
		"mtime": "2026-07-09T20:24:26.371Z",
		"size": 4506,
		"path": "../public/assets/Navbar-Ccgaws6q.js"
	},
	"/assets/o-nas-Cy9ajPr1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee7-cbbOgvupZfGqJSJ+EupneL54ZSg\"",
		"mtime": "2026-07-09T20:24:26.372Z",
		"size": 3815,
		"path": "../public/assets/o-nas-Cy9ajPr1.js"
	},
	"/assets/polityka-prywatnosci-CyCWrbUo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c17-bfqt8g8FXU9zxMH/xH1SG3yfRRY\"",
		"mtime": "2026-07-09T20:24:26.373Z",
		"size": 3095,
		"path": "../public/assets/polityka-prywatnosci-CyCWrbUo.js"
	},
	"/assets/realizacje-DC3AZppr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1890-PDVOTh+WIfuqcnT4+TRUOuQED0s\"",
		"mtime": "2026-07-09T20:24:26.373Z",
		"size": 6288,
		"path": "../public/assets/realizacje-DC3AZppr.js"
	},
	"/assets/routes-KWICEA9Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7733-BSBx1E5/JegYNCP71cZgaJytRAo\"",
		"mtime": "2026-07-09T20:24:26.373Z",
		"size": 30515,
		"path": "../public/assets/routes-KWICEA9Q.js"
	},
	"/assets/sparkles-Dyd2Nj7n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e4-9gA8DU8jo901X7yqS6K7rXQezfU\"",
		"mtime": "2026-07-09T20:24:26.374Z",
		"size": 484,
		"path": "../public/assets/sparkles-Dyd2Nj7n.js"
	},
	"/assets/polityka-cookies-Dm9LnBjy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e9-GPVOI+ynntHJcB+Xw7oN0N+faaU\"",
		"mtime": "2026-07-09T20:24:26.373Z",
		"size": 2281,
		"path": "../public/assets/polityka-cookies-Dm9LnBjy.js"
	},
	"/realizacje/bruk-bud/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"1ded-mSlLiFvxhbbbYzBaJ14Ob7kSWh0\"",
		"mtime": "2026-07-09T18:04:02.165Z",
		"size": 7661,
		"path": "../public/realizacje/bruk-bud/index.html"
	},
	"/realizacje/bruk-bud/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2544-A4+JKsBZNke0gOEOV+oH6X0hmiw\"",
		"mtime": "2026-07-09T17:43:29.000Z",
		"size": 9540,
		"path": "../public/realizacje/bruk-bud/styles.css"
	},
	"/realizacje/bruk-bud/style.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e78-n82D9ipLuZdJflnudr5we/V8udg\"",
		"mtime": "2026-07-09T18:04:28.416Z",
		"size": 7800,
		"path": "../public/realizacje/bruk-bud/style.css"
	},
	"/realizacje/dachmistrz/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"3b60-knVdTN7NtBi7vpchjQrvlmOtShw\"",
		"mtime": "2026-07-09T17:43:25.283Z",
		"size": 15200,
		"path": "../public/realizacje/dachmistrz/index.html"
	},
	"/assets/warunki-wspolpracy-YYieNQV3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bcc-vmxY3M/URfgXIFXJR7paqI97UiM\"",
		"mtime": "2026-07-09T20:24:26.375Z",
		"size": 3020,
		"path": "../public/assets/warunki-wspolpracy-YYieNQV3.js"
	},
	"/assets/styles-DrIA0Y93.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1cded-VnbS7Wz9diBfWtt0cmcrE5/xFCA\"",
		"mtime": "2026-07-09T20:24:26.378Z",
		"size": 118253,
		"path": "../public/assets/styles-DrIA0Y93.css"
	},
	"/realizacje/diamond-detailing/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"2c82-DwgvAEmz95eocq+YsiGNRMzp/7w\"",
		"mtime": "2026-07-09T17:49:53.981Z",
		"size": 11394,
		"path": "../public/realizacje/diamond-detailing/index.html"
	},
	"/realizacje/diamond-detailing/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"3237-cOMURp/uPkEwvaIx+ockAeBy8dY\"",
		"mtime": "2026-07-09T17:49:27.693Z",
		"size": 12855,
		"path": "../public/realizacje/diamond-detailing/styles.css"
	},
	"/realizacje/bruk-bud/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2482-GfDFWjVEaPs5XX/ZPgPaXFGEf0E\"",
		"mtime": "2026-07-09T18:01:10.293Z",
		"size": 926850,
		"path": "../public/realizacje/bruk-bud/hero.jpg"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"137df3-KqryiWPG8GlRlLHbnKW1O+YZVRw\"",
		"mtime": "2026-07-09T13:30:43.926Z",
		"size": 1277427,
		"path": "../public/favicon.png"
	},
	"/ikonka_strony.png": {
		"type": "image/png",
		"etag": "\"137df3-KqryiWPG8GlRlLHbnKW1O+YZVRw\"",
		"mtime": "2026-07-09T13:30:43.926Z",
		"size": 1277427,
		"path": "../public/ikonka_strony.png"
	},
	"/assets/logo_z_napisami_dół-Do56_ywa.png": {
		"type": "image/png",
		"etag": "\"174f5a-/tMziW2LgWI5ZHMOQbDqW0j4XEM\"",
		"mtime": "2026-07-09T20:24:26.375Z",
		"size": 1527642,
		"path": "../public/assets/logo_z_napisami_dół-Do56_ywa.png"
	},
	"/assets/samo_logo-B7Rv1VP5.png": {
		"type": "image/png",
		"etag": "\"16e613-Vbs0NkDOT8m8qCwE+DCFDByKCkE\"",
		"mtime": "2026-07-09T20:24:26.377Z",
		"size": 1500691,
		"path": "../public/assets/samo_logo-B7Rv1VP5.png"
	},
	"/realizacje/klimatech/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"1b70-pE2PNQitgGag3xXIkLPN76hVOCg\"",
		"mtime": "2026-07-09T18:02:19.435Z",
		"size": 7024,
		"path": "../public/realizacje/klimatech/index.html"
	},
	"/realizacje/klimatech/style.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e5b-9w/d9Q1OinXAkvaq6ypzhj0tCtw\"",
		"mtime": "2026-07-09T18:02:47.856Z",
		"size": 7771,
		"path": "../public/realizacje/klimatech/style.css"
	},
	"/realizacje/novadent/style.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1eb9-kJsKDj2YSF8/468IaOt14JPitGw\"",
		"mtime": "2026-07-09T18:03:37.065Z",
		"size": 7865,
		"path": "../public/realizacje/novadent/style.css"
	},
	"/realizacje/novadent/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"1a95-GJOID7a+EFhwU8kiRQDS/Bi7LRc\"",
		"mtime": "2026-07-09T18:03:10.326Z",
		"size": 6805,
		"path": "../public/realizacje/novadent/index.html"
	},
	"/realizacje/bruk-bud/assets/project1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c873-LWV9ICj/fYzfnIdJ4lq0F87C4v4\"",
		"mtime": "2026-07-09T17:41:40.000Z",
		"size": 116851,
		"path": "../public/realizacje/bruk-bud/assets/project1.jpg"
	},
	"/realizacje/bruk-bud/assets/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"4ee1d-ytnMRY4L/W9AOKmLKkxAiEqFbwU\"",
		"mtime": "2026-07-09T17:41:53.000Z",
		"size": 323101,
		"path": "../public/realizacje/bruk-bud/assets/hero.jpg"
	},
	"/realizacje/bruk-bud/assets/craftsman.jpg": {
		"type": "image/jpeg",
		"etag": "\"36190-uXqJQoi2pV3WsfFMuLe6sLsfAMo\"",
		"mtime": "2026-07-09T17:41:46.000Z",
		"size": 221584,
		"path": "../public/realizacje/bruk-bud/assets/craftsman.jpg"
	},
	"/realizacje/bruk-bud/assets/project2.jpg": {
		"type": "image/jpeg",
		"etag": "\"45d82-tM3mpTd+bUU5GN9fuRK7nut5gB0\"",
		"mtime": "2026-07-09T17:41:42.000Z",
		"size": 286082,
		"path": "../public/realizacje/bruk-bud/assets/project2.jpg"
	},
	"/realizacje/bruk-bud/assets/project3.jpg": {
		"type": "image/jpeg",
		"etag": "\"214b1-020KxAa7VZWwmWaIGzsiolodyag\"",
		"mtime": "2026-07-09T17:41:43.000Z",
		"size": 136369,
		"path": "../public/realizacje/bruk-bud/assets/project3.jpg"
	},
	"/realizacje/dachmistrz/css/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"3235-lT7OvEfRashqWh8buyXm4Lawelk\"",
		"mtime": "2026-07-09T17:44:02.460Z",
		"size": 12853,
		"path": "../public/realizacje/dachmistrz/css/styles.css"
	},
	"/realizacje/dachmistrz/images/after1.jpg": {
		"type": "image/jpeg",
		"etag": "\"3268d-/ONdKEZB6tTvLqEJdaFnF5/MTDI\"",
		"mtime": "2026-07-09T17:23:59.000Z",
		"size": 206477,
		"path": "../public/realizacje/dachmistrz/images/after1.jpg"
	},
	"/realizacje/dachmistrz/images/after2.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b657-y3OkCn/cRxRfzTWo4zlQ1+I0GAU\"",
		"mtime": "2026-07-09T17:24:10.000Z",
		"size": 177751,
		"path": "../public/realizacje/dachmistrz/images/after2.jpg"
	},
	"/realizacje/dachmistrz/images/after3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cb4f-nTur/vpkr0p7BRaCoAge83tuO0A\"",
		"mtime": "2026-07-09T17:24:20.000Z",
		"size": 117583,
		"path": "../public/realizacje/dachmistrz/images/after3.jpg"
	},
	"/realizacje/dachmistrz/images/before1.jpg": {
		"type": "image/jpeg",
		"etag": "\"36de8-2xneLzzWSvA4yKmhWTlUXdHm7ZE\"",
		"mtime": "2026-07-09T17:23:57.000Z",
		"size": 224744,
		"path": "../public/realizacje/dachmistrz/images/before1.jpg"
	},
	"/realizacje/dachmistrz/images/before2.jpg": {
		"type": "image/jpeg",
		"etag": "\"31755-7j2upxaclOQGo8Wa1wJXtN4UohU\"",
		"mtime": "2026-07-09T17:24:08.000Z",
		"size": 202581,
		"path": "../public/realizacje/dachmistrz/images/before2.jpg"
	},
	"/realizacje/dachmistrz/images/before3.jpg": {
		"type": "image/jpeg",
		"etag": "\"226f4-UNpCkbLhFPn1YbZbeRMjraTqUms\"",
		"mtime": "2026-07-09T17:24:02.000Z",
		"size": 141044,
		"path": "../public/realizacje/dachmistrz/images/before3.jpg"
	},
	"/assets/logo_z_napisami_prawa-C2TxvOLi.png": {
		"type": "image/png",
		"etag": "\"22ce76-sgS8/T981QniTqeEr7ZNGnqBHlY\"",
		"mtime": "2026-07-09T20:24:26.376Z",
		"size": 2281078,
		"path": "../public/assets/logo_z_napisami_prawa-C2TxvOLi.png"
	},
	"/realizacje/novadent/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"a7279-5i+WI9Utk7rCdsMkUof7MFDGZXs\"",
		"mtime": "2026-07-09T18:00:55.014Z",
		"size": 684665,
		"path": "../public/realizacje/novadent/hero.jpg"
	},
	"/realizacje/klimatech/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"e3929-C1vWtOqEf9KxMuOWtPyZ03noerA\"",
		"mtime": "2026-07-09T18:00:37.767Z",
		"size": 932137,
		"path": "../public/realizacje/klimatech/hero.jpg"
	},
	"/realizacje/bruk-bud/assets/project4.jpg": {
		"type": "image/jpeg",
		"etag": "\"af89b-nCOS9387kYRd9YuqSecgEKoThlo\"",
		"mtime": "2026-07-09T17:41:45.000Z",
		"size": 719003,
		"path": "../public/realizacje/bruk-bud/assets/project4.jpg"
	},
	"/realizacje/dachmistrz/images/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"217b3-hVA4B7WtyB/NLhJ6UxJNNg6CEmg\"",
		"mtime": "2026-07-09T17:23:56.000Z",
		"size": 137139,
		"path": "../public/realizacje/dachmistrz/images/hero.jpg"
	},
	"/realizacje/dachmistrz/images/roofer.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fa1a-TF0AgzHPdADvPTV0UIP0+7S000k\"",
		"mtime": "2026-07-09T17:24:06.000Z",
		"size": 195098,
		"path": "../public/realizacje/dachmistrz/images/roofer.jpg"
	},
	"/realizacje/dachmistrz/images/wiezba.jpg": {
		"type": "image/jpeg",
		"etag": "\"221c6-7a78v1sfaCotGaEnKePxre7LDHk\"",
		"mtime": "2026-07-09T17:24:06.000Z",
		"size": 139718,
		"path": "../public/realizacje/dachmistrz/images/wiezba.jpg"
	},
	"/realizacje/diamond-detailing/assets/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"31338-8CLFGD/FywhPBtZhET97hYbdXdE\"",
		"mtime": "2026-07-09T17:14:50.000Z",
		"size": 201528,
		"path": "../public/realizacje/diamond-detailing/assets/hero.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_BFRxwv = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_BFRxwv
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
