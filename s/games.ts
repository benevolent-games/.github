
import {html} from "@benev/turtle"

export const games = {

	rogue: {
		label: "Rogue Crusade",
		motto: "A New 1990s Roguelike for 2025",
		poster: "/assets/posters/rogue.avif",
		url: "https://rogue.benev.gg/",
		content: () => html`
			<p>We're building the ultimate 3d solo/co-op roguelike.</p>
		`,
	},

	regis: {
		label: "Regis.gg",
		motto: "A New Kind of 1v1 Strategy Game",
		poster: "/assets/posters/regis.avif",
		url: "https://regis.gg/",
		content: () => html`
			<p>Inspired by chess and modern rts games.</p>
		`,
	},
}

