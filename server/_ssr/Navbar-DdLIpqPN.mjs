import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Menu, h as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Navbar-DdLIpqPN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var samo_logo_default = "/assets/samo_logo-B7Rv1VP5.png";
function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-6 z-50 flex justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full max-w-6xl flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 px-6 py-4 md:py-3 md:px-10 bg-background/80 border border-primary/30 rounded-[2rem] md:rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden transition-all duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between w-full md:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/#top",
					className: "flex items-center gap-3 shrink-0",
					onClick: () => setIsMobileMenuOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: samo_logo_default + "?v=2",
						alt: "Stroniq",
						height: 56,
						className: "h-10 md:h-14 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg md:text-xl tracking-[0.2em] text-primary",
						children: "STRONIQ"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden text-primary p-2 focus:outline-none transition-transform active:scale-95",
					onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
					"aria-label": "Toggle menu",
					children: isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 28 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${isMobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 w-full md:w-auto mt-4 md:mt-0 pb-2 md:pb-0`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col md:flex-row items-center gap-6 md:gap-6 text-sm md:text-[11px] font-medium tracking-widest uppercase text-muted-foreground w-full md:w-auto text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#services",
							onClick: () => setIsMobileMenuOpen(false),
							className: "transition hover:text-primary whitespace-nowrap py-2 md:py-0 w-full md:w-auto",
							children: "Oferta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/realizacje",
							onClick: () => setIsMobileMenuOpen(false),
							className: "transition hover:text-primary whitespace-nowrap py-2 md:py-0 w-full md:w-auto",
							children: "Realizacje"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#work",
							onClick: () => setIsMobileMenuOpen(false),
							className: "transition hover:text-primary whitespace-nowrap py-2 md:py-0 w-full md:w-auto",
							children: "Tworzenie"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#pricing",
							onClick: () => setIsMobileMenuOpen(false),
							className: "transition hover:text-primary whitespace-nowrap py-2 md:py-0 w-full md:w-auto",
							children: "Inwestycja"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#contact",
							onClick: () => setIsMobileMenuOpen(false),
							className: "transition hover:text-primary whitespace-nowrap py-2 md:py-0 w-full md:w-auto",
							children: "Inicjacja"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/kontakt",
					onClick: () => setIsMobileMenuOpen(false),
					className: "group inline-flex items-center justify-center gap-2 rounded-full bg-amber-gradient px-6 py-3 md:px-5 md:py-2.5 text-sm md:text-xs font-semibold text-primary-foreground shadow-amber-glow transition hover:-translate-y-0.5 shrink-0 w-full md:w-auto mt-2 md:mt-0",
					children: ["Porozmawiajmy o projekcie!", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 md:h-4 md:w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
				})]
			})]
		})
	});
}
//#endregion
export { samo_logo_default as n, Navbar as t };
