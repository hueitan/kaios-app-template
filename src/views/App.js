import { h } from 'preact'
import { useReducer } from 'preact/hooks'
import { Router } from 'preact-router'
import { Popup, Softkey } from 'components'
import { createHashHistory } from 'history'
import { SoftkeyContext, PopupContext } from 'contexts'
import { SoftkeyReducer, PopupReducer } from 'reducers'
import { Example, Example2 } from 'views'

export const App = () => {
  // global state management
  const [softkeyState, dispatchSoftkeyState] = useReducer(SoftkeyReducer, {})
  const [popupState, dispatchPopupState] = useReducer(PopupReducer, [])

  return (
    <PopupContext.Provider value={{ state: popupState, dispatch: dispatchPopupState }}>
      <SoftkeyContext.Provider value={{ state: softkeyState, dispatch: dispatchSoftkeyState }}>
        <Router history={createHashHistory()}>
          <Example path='/' />
          <Example2 path='/example2' />
        </Router>
        <Popup popups={popupState} />
        <Softkey {...softkeyState.current} />

      </SoftkeyContext.Provider>
    </PopupContext.Provider>
  )
}
