/**
 * Crée un élément vdom
 * @param {string} type Type de l'élément à ajouter
 * @param {object} props
 * @param {...object|string} children
 * @return {{type: string, props: object}}
 */
export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === 'object' ? child : createTextElement(child)
      })
    }
  }
}

/**
 * Crée un noeud de type text
 * @param {string} text
 * @return {{type: string, props: {nodeValue: *, children: []}}}
 */
function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}
