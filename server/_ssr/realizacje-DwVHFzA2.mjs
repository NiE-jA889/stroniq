import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Hammer, h as ArrowUpRight, i as Sparkles, n as Wind, r as Stethoscope, u as HardHat } from "../_libs/lucide-react.mjs";
import { t as Navbar } from "./Navbar-DdLIpqPN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/realizacje-DwVHFzA2.js
var import_jsx_runtime = require_jsx_runtime();
function Realizacje() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground selection:bg-primary/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-5 py-32 md:px-10 md:py-48",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium uppercase tracking-[0.3em] text-primary",
							children: "Portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-7xl",
							children: ["Nasze ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-primary",
								children: "realizacje."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
							children: "Przykłady stron, które pomogły naszym klientom wyróżnić się w sieci, zwiększyć konwersję i zbudować silny wizerunek."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-24 grid gap-12 md:grid-cols-2 lg:gap-16",
					children: [
						{
							id: "klimatech",
							title: "KlimaTech Pro",
							desc: "Nowoczesny Landing Page dla autoryzowanego instalatora HVAC. Ukierunkowany na Czyste Powietrze.",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, {
								className: "h-16 w-16 text-blue-400 group-hover:text-blue-300 transition-colors duration-500",
								strokeWidth: 1
							}),
							bgGrad: "bg-gradient-to-br from-blue-900/40 to-slate-900"
						},
						{
							id: "dachmistrz",
							title: "DachMistrz",
							desc: "Wizytówka firmy dekarskiej premium. Potężna galeria realizacji i wyceny.",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hammer, {
								className: "h-16 w-16 text-amber-500 group-hover:text-amber-400 transition-colors duration-500",
								strokeWidth: 1
							}),
							bgGrad: "bg-gradient-to-br from-amber-900/40 to-slate-900"
						},
						{
							id: "diamond-detailing",
							title: "Diamond Detailing",
							desc: "Ekskluzywne studio motoryzacyjne. Mroczny design i pakiety usług.",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "h-16 w-16 text-purple-400 group-hover:text-purple-300 transition-colors duration-500",
								strokeWidth: 1
							}),
							bgGrad: "bg-gradient-to-br from-purple-900/40 to-black"
						},
						{
							id: "novadent",
							title: "NovaDent Clinic",
							desc: "Nowoczesna stomatologia i implantologia. Integracja z systemami rezerwacji.",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
								className: "h-16 w-16 text-teal-400 group-hover:text-teal-300 transition-colors duration-500",
								strokeWidth: 1
							}),
							bgGrad: "bg-gradient-to-br from-teal-900/40 to-slate-900"
						},
						{
							id: "bruk-bud",
							title: "Bruk-Bud Premium",
							desc: "Usługi brukarskie dla wymagających. Elegancka prezentacja architektury.",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardHat, {
								className: "h-16 w-16 text-orange-500 group-hover:text-orange-400 transition-colors duration-500",
								strokeWidth: 1
							}),
							bgGrad: "bg-gradient-to-br from-orange-900/40 to-slate-900"
						}
					].map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `/realizacje/${project.id}/index.html`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group relative flex flex-col gap-5 block cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/50 ${project.bgGrad} transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] group-hover:border-primary/40`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-transform duration-700 z-10 group-hover:scale-110",
								children: project.icon
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary/5 opacity-0 transition duration-500 group-hover:opacity-100 z-0" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-light transition-colors group-hover:text-primary",
								children: project.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: project.desc
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})]
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg tracking-[0.2em]",
							children: "STRONIQ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "· Portfolio"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 border-t border-primary/10 bg-background/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-5 py-6 text-sm font-medium tracking-wide text-muted-foreground md:flex-row md:gap-12 md:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Stroniq. Wszelkie prawa zastrzeżone."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/o-nas",
								className: "transition hover:text-primary",
								children: "O nas"
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/warunki-wspolpracy",
								className: "transition hover:text-primary",
								children: "Warunki współpracy"
							})
						]
					})
				})]
			})
		]
	});
}
//#endregion
export { Realizacje as component };
