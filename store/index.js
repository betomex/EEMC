export const state = () => ({
  answers: []
})

export const mutations = {
  setAnswers(state, payload) {
    state.answers = payload
  }
}
