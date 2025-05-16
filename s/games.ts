
import {html} from "@benev/turtle"

const cdn = "https://benev-storage.sfo2.cdn.digitaloceanspaces.com/website"

export const games = {

	praxis: {
		label: "Praxis",
		motto: "Gameplay Laboratory",
		poster: `${cdn}/posters/praxis.png`,
		url: "https://praxis.benevolent.games/",
		content: () => html`
			<p>lol</p>
		`,
	},

	rogue: {
		label: "Rogue Crusade",
		motto: "90s Roguelike for 2025",
		poster: `${cdn}/posters/rogue.png`,
		url: "https://rogue.benevolent.games/",
		content: () => html`
			<p>We're building a new 90s roguelike for 2025. It'll be a co-op/solo dungeon crawler with permadeath and procgen.</p>
		`,
	},

	regis: {
		label: "Regis",
		motto: "1v1 Strategy Game",
		poster: `${cdn}/posters/regis.png`,
		url: "https://regis.gg/",
		content: () => html`
			<p>Inspired by chess and modern rts games.</p>
		`,
	},
}

