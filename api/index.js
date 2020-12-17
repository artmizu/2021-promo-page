import sale from './sale.api'

const mapBindMethods = (context, methods) => {
  const obj = {}
  Object.keys(methods).forEach((key) => {
    obj[key] = methods[key].bind(context)
  })
  return obj
}

export default (context) => ({
  sale: mapBindMethods(context, sale)
})
