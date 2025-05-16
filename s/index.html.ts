
import "@benev/slate/x/node.js"
import {template, html, easypage, headScripts, git_commit_hash, read_file, renderSocialCard} from "@benev/turtle"

import {games} from "./games.js"

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
					<img alt="" src="${favicon}"/>
					<strong>Benevolent Games</strong>
				</div>
			</header>

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

			<footer>
				<p><strong>${description}</strong></p>
				<p>Learn more on <a href="https://github.com/benevolent-games" alt="">GitHub</a></p>
				<p>Join us on <a href="https://discord.gg/BnZx2utdev" alt="">Discord</a></p>
			</footer>
		`,
	})
})

