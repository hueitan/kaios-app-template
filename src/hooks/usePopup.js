import { useContext, useEffect } from 'preact/hooks'

import { PopupContext } from 'contexts'

export const usePopup = (component, options = {}) => {
  const popup = useContext(PopupContext)

  useEffect(() => {
    console.log('cool for usePopup')
  }, [])
  console.log('usePopup after context')
  const close = () => {
    popup.dispatch({ type: 'close' })
    // setPopupState(oldState => {
    //   const newState = [...oldState]
    //   newState.pop()
    //   return newState
    // })
  }

  // const closeAll = () => {
  //   popup.dispatch({ type: 'closeAll' })
  //   // setPopupState([])
  // }

  const show = props => {
    console.log('showoing', props)
    popup.dispatch({ type: 'show', component, props, options })
    // setPopupState(oldState => {
    //   let newState = [...oldState]
    //   const newPopup = {
    //     component,
    //     props: {
    //       ...props,
    //       close,
    //       closeAll
    //     },
    //     options,
    //     id: component.name
    //   }
    //   if (options.stack) {
    //     // prevent showing duplicate component
    //     if (!newState.find(state => state.id === newPopup.id)) {
    //       newState.push(newPopup)
    //     }
    //   } else {
    //     newState = [newPopup]
    //   }
    //   return newState
    // })
  }
  return [show, close]
}
