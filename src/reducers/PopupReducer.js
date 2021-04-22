/* eslint-disable no-case-declarations */
export const PopupReducer = (state, action) => {
  let newState
  switch (action.type) {
    case 'close':
      newState = [...state]
      newState.pop()
      return newState
    case 'closeAll':
      return []
    case 'show':

      newState = [...state]
      const { component, props, options } = action
      console.log('showing cool', options)
      const newPopup = {
        component,
        props: {
          ...props,
          close: () => {},
          closeAll: () => {}
        },
        options,
        id: component.name
      }
      if (options.stack) {
        // prevent showing duplicate component
        if (!newState.find(state => state.id === newPopup.id)) {
          newState.push(newPopup)
        }
      } else {
        newState = [newPopup]
      }
      return newState
    default:
      return state
  }
}
