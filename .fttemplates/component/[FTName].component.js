import ChildComponent from '@/core/component/child.component'
import renderServise from '@/core/services/render.service'

import styles from './<FTName>.module.scss'
import template from './<FTName>.template.scss'

export class <FTName | pascalcase> exports ChildComponent {
    render() {
        this.element = renderService.htmlToElement(template, [], styles);

        return this.element;
    }
}