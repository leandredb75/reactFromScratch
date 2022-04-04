const isEvent = k => k.startsWith('on')
const eventName = k => k.toLowerCase().substring(2)
const isProperty = k => k !== 'children'

export function createDom(fiber) {
    const dom =
        fiber.type === 'TEXT_ELEMENT'
            ? document.createTextNode(fiber.props.nodeValue)
            : document.createElement(fiber.type)

    updateDom(dom, {}, fiber.props)

    return dom
}