
import "@benev/slate/x/node.js"
import {svgTurtle} from "@benev/slate/x/tools/svgs/svg-turtle.js"
import {template, html, easypage, headScripts, git_commit_hash, read_file} from "@benev/turtle"

import {games} from "./games.js"
import bSvg from "./dom/icons/b.svg.js"
import {renderSocialCard} from "./utils/social-card.js"

const domain = "benevolent.games"
const favicon = "/assets/favicon.png"
const description = "Building the future of web games"

export default template(async basic => {
	const path = basic.path(import.meta.url)
	const hash = await git_commit_hash()
	return easypage({
		path,
		dark: true,
		css: "index.css",
		title: "Benevolent Games",
		head: html`
			<link rel="icon" href="${favicon}"/>
			<link rel="stylesheet" href="${path.version.root("index.css")}"/>
			<meta data-commit-hash="${hash}"/>

			${renderSocialCard({
				themeColor: "#f2ea8e",
				siteName: domain,
				title: "👼 Benevolent Games",
				description,
				image: `https://${domain}${favicon}`,
				url: `https://${domain}/`,
				type: "website",
			})}

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
					<strong>Benevolent Games</strong>
					<em>${description}</em>
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

