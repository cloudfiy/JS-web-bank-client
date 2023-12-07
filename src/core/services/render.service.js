import { ChildComponent } from '../component/child.component'

class RenderService {
	htmlToElement(html, components = [], styles) {
		const template = document.createElement('template')
		template.innerHTML = html.trim()

		const element = template.content.firstChild

		this.#replaceComponentTags(element, components)

		return element
	}

	#replaceComponentTags(parentElement, component) {
		const componentTagPattern = /^component-/
		const allElement = parentElement.getElementsByTagName('*')

		for (const element of allElement) {
			const elementTagName = element.tagName.toLowerCase()

			if (componentTagPattern.test(elementTagName)) {
				const componentName = element.tagName
					.toLowerCase()
					.replace(componentTagPattern, '')
					.replace(/-/g, '')

				const foundComponent = component.find(Component => {
					const instance =
						Component instanceof ChildComponent ? Component : new Component()

					return instance.constructor.name.toLowerCase() === componentName
				})

				if (foundComponent) {
					const componentContent =
						foundComponent instanceof ChildComponent
							? foundComponent.render()
							: new foundComponent().render
					element.replaceWith(componentContent)
				} else {
					console.error(
						`Component "${componentName}" not found in the provided components array`
					)
				}
			}
		}
	}
}

export default new RenderService()
