import { t as samo_logo_default } from "./samo_logo-Dvl2NZs0.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalLayout-BRULu4ZB.js
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px] animate-pulse" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px] animate-float-slow" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[40%] right-[20%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px] animate-float-reverse" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute inset-0 w-full h-full",
						preserveAspectRatio: "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "25%",
								y1: "0",
								x2: "25%",
								y2: "100%",
								stroke: "oklch(0.82 0.13 85 / 0.05)",
								strokeWidth: "1",
								strokeDasharray: "4 8"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "75%",
								y1: "0",
								x2: "75%",
								y2: "100%",
								stroke: "oklch(0.82 0.13 85 / 0.04)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "0",
								y1: "200",
								x2: "100%",
								y2: "200",
								stroke: "oklch(0.82 0.13 85 / 0.04)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "0",
								y1: "80%",
								x2: "100%",
								y2: "80%",
								stroke: "oklch(0.82 0.13 85 / 0.03)",
								strokeWidth: "1",
								strokeDasharray: "10 20"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-6 z-50 flex justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full max-w-6xl flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 px-6 py-4 md:py-3 md:px-10 bg-background/80 border border-primary/30 rounded-[2rem] md:rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-12 w-full md:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: samo_logo_default + "?v=2",
								alt: "Stroniq",
								height: 56,
								className: "h-10 md:h-14 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg md:text-xl tracking-[0.2em] text-primary",
								children: "STRONIQ"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-6 overflow-x-auto text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-muted-foreground md:overflow-visible pb-1 md:pb-0 scrollbar-hide shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "services",
									className: "transition hover:text-primary whitespace-nowrap",
									children: "Oferta"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/realizacje",
									className: "transition hover:text-primary whitespace-nowrap",
									children: "Realizacje"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "work",
									className: "transition hover:text-primary whitespace-nowrap",
									children: "Tworzenie"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "pricing",
									className: "transition hover:text-primary whitespace-nowrap",
									children: "Inwestycja"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "contact",
									className: "transition hover:text-primary whitespace-nowrap",
									children: "Inicjacja"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kontakt",
						className: "group hidden md:inline-flex items-center gap-2 rounded-full bg-amber-gradient px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-amber-glow transition hover:-translate-y-0.5 shrink-0",
						children: ["Porozmawiajmy o projekcie!", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto max-w-6xl px-5 py-32 md:px-10 md:py-48 flex flex-col lg:flex-row gap-12 lg:gap-20",
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
