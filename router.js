export default class Router {
  constructor() {
    this.routes = []
  }

  get(uri, callback) {
    if (!uri || !callback) throw new Error("une uri ou un callback doit etre donnée")

    if (typeof uri !== "string") throw new TypeError("le type de uri doit etre une string")
    if (typeof callback !== "function") throw new TypeError("le type de callback doit etre une fonction")
    this.routes.forEach(route => {
      if (route.uri === uri) throw new Error(`the uri ${route.uri} already exists`)
    })
    const route = {
      uri,
      callback
    }
    this.routes.push(route)
  }

  init() {
    this.routes.some(route => {
      let regEx = new RegExp(`^${route.uri}$`)
      let path = window.location.pathname

      if (path.match(regEx)) {
        let req = { path }
        return route.callback.call(this, req)
      }
    })
  }
}
