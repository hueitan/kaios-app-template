import { h } from 'preact'
import { useReducer, useState } from 'preact/hooks'
import { Router } from 'preact-router'
import { Popup, Softkey } from 'components'
import { createHashHistory } from 'history'
import { SoftkeyContext, PopupContext } from 'contexts'
import { SoftkeyReducer } from 'reducers'
import { Example, Example2 } from 'views'

export const App = () => {
  // global state management
  const [state, dispatch] = useReducer(SoftkeyReducer, {})
  const [popupState, setPopupState] = useState([])

  return (
    <SoftkeyContext.Provider value={{ state, dispatch }}>
      <PopupContext.Provider value={{ popupState, setPopupState }}>
        <Router history={createHashHistory()}>
          <Example path='/' />
          <Example2 path='/example2' />
        </Router>
        <Softkey {...state.current} />
        <Popup popups={popupState} />
      </PopupContext.Provider>
    </SoftkeyContext.Provider>
  )
}
