
import {html, shadowComponent} from "@benev/slate"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

export const BenevApp = shadowComponent(use => {
	use.styles(themeCss, stylesCss)

	return html`
		<div>hello</div>
	`
})

