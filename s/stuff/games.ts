
import {html} from "@e280/scute"
import {cdn} from "./cdn.js"

export const games = {
	praxis: {
		label: "Praxis",
		motto: "Gameplay Laboratory",
		poster: cdn.posters.praxis,
		url: "https://praxis.benevolent.games/",
		content: () => html`
			<p>lol</p>
		`,
	},

	rogue: {
		label: "Rogue Crusade",
		motto: "90s Roguelike for 2025",
		poster: cdn.posters.rogue,
		url: "https://rogue.benevolent.games/",
		content: () => html`
			<p>We're building a new 90s roguelike for 2025. It'll be a co-op/solo dungeon crawler with permadeath and procgen.</p>
		`,
	},

	regis: {
		label: "Regis",
		motto: "1v1 Strategy Game",
		poster: cdn.posters.regis,
		url: "https://regis.gg/",
		content: () => html`
			<p>Inspired by chess and modern rts games.</p>
		`,
	},
}

export function renderGames() {
	return html`
		<div class=gamelist>
			${Object.values(games).map(game => html`
				<a class=game href="${game.url}">
					<figure>
						<img src="${game.poster}" alt="" loading="lazy"/>
					</figure>
					<div>
						<h1>${game.label}</h1>
						<p class=subtitle>${game.motto}</p>
					</div>
				</a>
			`)}
		</div>
	`
}

