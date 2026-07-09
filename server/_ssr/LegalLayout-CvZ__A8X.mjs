import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Navbar } from "./Navbar-DdLIpqPN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalLayout-CvZ__A8X.js
var import_jsx_runtime = require_jsx_runtime();
function LegalLayout({ children, title, description }) {
	const currentPath = useRouterState().location.pathname;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground selection:bg-primary/30 relative isolate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0 overflow-hidden pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-primary/25 blur-[150px] animate-pulse" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] animate-float-slow" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[40%] right-[20%] h-[300px] w-[300px] rounded-full bg-primary/15 blur-[100px] animate-float-reverse" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute inset-0 w-full h-full",
						preserveAspectRatio: "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "25%",
								y1: "0",
								x2: "25%",
								y2: "100%",
								stroke: "oklch(0.82 0.13 85 / 0.15)",
								strokeWidth: "1",
								strokeDasharray: "4 8"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "75%",
								y1: "0",
								x2: "75%",
								y2: "100%",
								stroke: "oklch(0.82 0.13 85 / 0.12)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "0",
								y1: "200",
								x2: "100%",
								y2: "200",
								stroke: "oklch(0.82 0.13 85 / 0.12)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "0",
								y1: "80%",
								x2: "100%",
								y2: "80%",
								stroke: "oklch(0.82 0.13 85 / 0.10)",
								strokeWidth: "1",
								strokeDasharray: "10 20"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto max-w-6xl px-5 pt-40 pb-32 md:px-10 md:pt-48 md:pb-48 flex flex-col lg:flex-row gap-12 lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:w-1/4 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-32 rounded-2xl border border-primary/20 bg-card/30 p-6 shadow-[0_0_40px_rgba(212,175,55,0.05)] backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold text-lg text-foreground mb-6",
							children: "Centrum Pomocy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex flex-col gap-2",
							children: [
								{
									href: "/o-nas",
									label: "O nas"
								},
								{
									href: "/warunki-wspolpracy",
									label: "Warunki współpracy"
								},
								{
									href: "/polityka-prywatnosci",
									label: "Polityka prywatności"
								},
								{
									href: "/polityka-cookies",
									label: "Pliki cookies"
								}
							].map((link) => {
								const isActive = currentPath === link.href;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.href,
									className: `block rounded-lg px-4 py-3 text-sm transition-all ${isActive ? "bg-primary/15 font-medium text-primary border border-primary/20" : "text-muted-foreground hover:bg-card hover:text-foreground border border-transparent"}`,
									children: link.label
								}, link.href);
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:w-3/4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-primary/10 bg-card/20 p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl font-light md:text-4xl",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-primary/80",
								children: description
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "prose prose-invert prose-p:text-muted-foreground prose-headings:font-display prose-headings:font-normal prose-a:text-primary max-w-none",
							children
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-card/20 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row md:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Stroniq. Wszelkie prawa zastrzeżone."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/o-nas",
								className: "transition hover:text-primary",
								children: "O nas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/warunki-wspolpracy",
								className: "transition hover:text-primary",
								children: "Warunki współpracy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/polityka-prywatnosci",
								className: "transition hover:text-primary",
								children: "Polityka prywatności"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/polityka-cookies",
								className: "transition hover:text-primary",
								children: "Polityka cookies"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { LegalLayout as t };
