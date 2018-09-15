import { observable, action, toJS } from 'mobx'

const state = observable({
  form: {},
  loggedIn: false
})
const actions = {}
actions.updateField = action((fieldName, value) => {
  state.form[fieldName] = value
})
actions.submitForm = action(() => {
  let formJson = toJS(state.form)
  if (!formJson.username || !formJson.password) {
    alert('Username or Password Empty, Please fill-in!')
    return
  }
  if (formJson.username === 'alex' && formJson.password === '12345678') {
    state.loggedIn = true
  } else {
    alert('Invalid Username or Password, Please try again!')
    state.loggedIn = false
  }
})
export default { state, actions }
