
import {ssg, html} from "@e280/scute"
import {cdn} from "./stuff/cdn.js"

const domain = "benevolent.games"
const favicon = "/assets/favicon.png"
const description = "building the future of web games"

export default ssg.page(import.meta.url, async _orb => ({
	title: "benevolent.games",
	js: "index.bundle.min.js",
	css: "index.css",
	favicon,
	dark: true,
	socialCard: {
		themeColor: "#f2ea8e",
		siteName: domain,
		title: "👼 benevolent.games",
		description,
		image: `https://${domain}${favicon}`,
	},
	body: html`
		<header>
			<div class=logo>
				<img alt="" src="${favicon}"/>
				<strong>benevolent.games</strong>
			</div>
		</header>

		<div class=hero>
			<img src="${cdn.posters.praxis}" alt=""/>
		</div>

		<footer>
			<p><strong>${description}</strong></p>
			<p>
				<a href="https://github.com/benevolent-games" alt="">github</a>
				·
				<a href="https://discord.gg/BnZx2utdev" alt="">discord</a>
			</p>
		</footer>
	`,
}))

