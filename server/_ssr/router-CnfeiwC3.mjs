import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CnfeiwC3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-ak12p_55.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Stroniq — Projektowanie stron internetowych premium" },
			{
				name: "description",
				content: "Stroniq tworzy szybkie, eleganckie i zoptymalizowane pod SEO strony internetowe. Hosting i domena w cenie każdego pakietu."
			},
			{
				name: "author",
				content: "Stroniq"
			},
			{
				property: "og:title",
				content: "Stroniq — Projektowanie stron internetowych premium"
			},
			{
				property: "og:description",
				content: "Szybkie, responsywne i przyjazne SEO strony internetowe. Nowoczesny stack, elegancki design, hosting i domena w cenie."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Stroniq — Projektowanie stron internetowych premium"
			},
			{
				name: "description",
				content: "Stroniq tworzy eleganckie, szybkie i zoptymalizowane pod SEO strony internetowe. Hosting i domena w cenie."
			},
			{
				property: "og:description",
				content: "Stroniq tworzy eleganckie, szybkie i zoptymalizowane pod SEO strony internetowe. Hosting i domena w cenie."
			},
			{
				name: "twitter:description",
				content: "Stroniq tworzy eleganckie, szybkie i zoptymalizowane pod SEO strony internetowe. Hosting i domena w cenie."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9b65e4b8-379d-404c-b7d8-e1d21cfdb7f0"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9b65e4b8-379d-404c-b7d8-e1d21cfdb7f0"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$6 = () => import("./warunki-wspolpracy-B7NNiPbT.mjs");
var Route$6 = createFileRoute("/warunki-wspolpracy")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Warunki Współpracy — Stroniq" }, {
		name: "description",
		content: "Zasady i warunki realizacji projektów stron internetowych."
	}] })
});
var $$splitComponentImporter$5 = () => import("./realizacje-_Uu5QY_G.mjs");
var Route$5 = createFileRoute("/realizacje")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Realizacje — Stroniq" }, {
		name: "description",
		content: "Zobacz nasze najnowsze realizacje i projekty stron internetowych."
	}] })
});
var $$splitComponentImporter$4 = () => import("./polityka-prywatnosci-D5GNyPOx.mjs");
var Route$4 = createFileRoute("/polityka-prywatnosci")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Polityka Prywatności — Stroniq" }, {
		name: "description",
		content: "Informacje o przetwarzaniu danych osobowych."
	}] })
});
var $$splitComponentImporter$3 = () => import("./polityka-cookies-DmDeQw6T.mjs");
var Route$3 = createFileRoute("/polityka-cookies")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Polityka Cookies — Stroniq" }, {
		name: "description",
		content: "Informacje o wykorzystywaniu plików cookies."
	}] })
});
var $$splitComponentImporter$2 = () => import("./o-nas-CAVjbqrg.mjs");
var Route$2 = createFileRoute("/o-nas")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "O Nas — Stroniq" }, {
		name: "description",
		content: "Poznaj inżyniera stojącego za elitarnymi stronami WWW."
	}] })
});
var $$splitComponentImporter$1 = () => import("./kontakt-lDW2KL4_.mjs");
var Route$1 = createFileRoute("/kontakt")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Kontakt — Stroniq" }, {
		name: "description",
		content: "Wybierz formę kontaktu i zacznijmy projekt."
	}] })
});
var $$splitComponentImporter = () => import("./routes-CmQt6wXS.mjs");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Stroniq — Projektowanie stron internetowych premium" }, {
		name: "description",
		content: "Stroniq tworzy eleganckie, szybkie i zoptymalizowane pod SEO strony internetowe. Hosting i domena w cenie."
	}] })
});
var WarunkiWspolpracyRoute = Route$6.update({
	id: "/warunki-wspolpracy",
	path: "/warunki-wspolpracy",
	getParentRoute: () => Route$7
});
var RealizacjeRoute = Route$5.update({
	id: "/realizacje",
	path: "/realizacje",
	getParentRoute: () => Route$7
});
var PolitykaPrywatnosciRoute = Route$4.update({
	id: "/polityka-prywatnosci",
	path: "/polityka-prywatnosci",
	getParentRoute: () => Route$7
});
var PolitykaCookiesRoute = Route$3.update({
	id: "/polityka-cookies",
	path: "/polityka-cookies",
	getParentRoute: () => Route$7
});
var ONasRoute = Route$2.update({
	id: "/o-nas",
	path: "/o-nas",
	getParentRoute: () => Route$7
});
var KontaktRoute = Route$1.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	KontaktRoute,
	ONasRoute,
	PolitykaCookiesRoute,
	PolitykaPrywatnosciRoute,
	RealizacjeRoute,
	WarunkiWspolpracyRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
