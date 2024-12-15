
import "@benev/slate/x/node.js"
import {svgTurtle} from "@benev/slate/x/tools/svgs/svg-turtle.js"
import {template, html, easypage, headScripts, git_commit_hash, read_file} from "@benev/turtle"

import {games} from "./games.js"
import bSvg from "./dom/icons/b.svg.js"
import {SocialCard, renderSocialCardMetas} from "./utils/social-card.js"

const card: SocialCard = {
	themeColor: "#f2ea8e",
	siteName: "Benevolent.games",
	title: "Benevolent Games",
	description: "Building the future of web games",
	image: "https://benevolent.games/assets/favicon.png",
	url: "https://benevolent.games/",
	type: "website",
}

export default template(async basic => {
	const path = basic.path(import.meta.url)
	const hash = await git_commit_hash()
	return easypage({
		path,
		dark: true,
		css: "index.css",
		title: "Benevolent Games",
		head: html`
			<link rel="icon" href="/assets/favicon.png"/>
			<link rel="stylesheet" href="${path.version.root("index.css")}"/>
			<meta data-commit-hash="${hash}"/>

			${renderSocialCardMetas(card)}

			${headScripts({
				devModulePath: await path.version.root("index.bundle.js"),
				prodModulePath: await path.version.root("index.bundle.min.js"),
				importmapContent: await read_file("x/importmap.json"),
			})}
		`,
		body: html`

			<header>
				<div class=logo>
					${svgTurtle(bSvg)}
					<strong>${card.title}</strong>
					<em>${card.description}</em>
				</div>
			</header>

			<div class=gamelist>
				${Object.values(games).map(game => html`
					<section>
						<figure>
							<a href="${game.url}">
								<img src="${game.poster}" alt="" loading="lazy"/>
							</a>
						</figure>
						<div>
							<hgroup>
								<h1>${game.label}</h1>
								<h2>${game.motto}</h2>
							</hgroup>
							${game.content()}
							<p>
								<span>Play now at</span>
								<a class="play button" href="${game.url}">
									${game.url}
								</a>
							</p>
						</div>
					</section>
				`)}
			</div>

			<footer>
				<a href="https://github.com/benevolent-games" alt="">GitHub</a>
				<a href="https://discord.gg/BnZx2utdev" alt="">Discord</a>
			</footer>
		`,
	})
})

