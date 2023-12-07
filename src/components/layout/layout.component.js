export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHTML = `<header>
		Header
		<nav>
			<a href="/">home</a>
			<a href="/auth">auth</a>
		</nav>
		</header>`

		return `
        ${headerHTML}	
        <main>
        ${this.children}
        </main>
        `
	}
}
