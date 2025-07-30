
const url = (path: string) => `https://benev-storage.sfo2.cdn.digitaloceanspaces.com/website/${path}`

export const cdn = {
	url,
	posters: {
		praxis: url("posters/praxis.png"),
		rogue: url("posters/rogue.png"),
		regis: url("posters/regis.png"),
	},
}

