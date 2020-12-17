export default {
  get() {
    return this.$axios.$get('/api/v1/discounts')
  },
  getByID(id) {
    return this.$axios.$get(`/api/v1/discounts/${id}`)
  }
}
