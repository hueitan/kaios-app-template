import { h } from 'preact'
import { useRef, useContext, useEffect } from 'preact/hooks'
import { route } from 'preact-router'
import { ListView, Alert } from 'components'
import { useSoftkey, useNavigation, usePopup } from 'hooks'
import { confirm } from 'utils'
import { PopupContext } from 'contexts'

export const Example = () => {
  const containerRef = useRef()
  const listRef = useRef()
  const [, , getCurrent] = useNavigation('Example', containerRef, listRef, 'y')
  const items = [
    { title: 'Confirm', description: 'Show Confirm Component', action: () => confirm({ title: 'Confirm', message: 'This is a confirm popup' }) },
    {
      title: 'Alert',
      description: 'Show Alert Component',
      action: () => {
        // const [showAlertDialog] = usePopup(Alert, { stack: true })
        // showAlertDialog({ title: 'Alert', message: 'This is an alert popup' })
        setTimeout(() => {
          const popup = useContext(PopupContext)
          popup.dispatch({ type: 'show', component: Alert, props: { title: 'Alert', message: 'This is an alert popup' } })
          console.log(popup)
        }, 1000)
      }
    },
    { title: 'Item 3' },
    { title: 'Item 4' },
    { title: 'Item 5' },
    { title: 'Item 6' }
  ]

  // alert({ title: 'Confirm', message: 'This is a confirm popup' })

  useSoftkey('Example', {
    right: 'Next',
    onKeyRight: () => {
      route('/example2')
    },
    center: 'Press',
    onKeyCenter: () => {
      const { index } = getCurrent()
      if (items[index].action) {
        items[index].action()
      }
    }
  })

  useEffect(() => {
    setTimeout(() => {
      try {
      // approach 1
        const [showAlertDialog] = usePopup(Alert, { stack: true })
        showAlertDialog({ title: 'Alert', message: 'This is an alert popup' })

        // approach 2
        const popup = useContext(PopupContext)
        popup.dispatch({ type: 'show', component: Alert, props: { title: 'Alert', message: 'This is an alert popup' } })
        console.log(popup)
      } catch (e) {
        console.error(e)
      }
    }, 1000)
  }, [])

  return <div ref={containerRef}>
    <ListView header='Example Page' items={items} containerRef={listRef} />
  </div>
}
