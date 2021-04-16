import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { route } from 'preact-router'
import { ListView } from 'components'
import { useSoftkey, useNavigation } from 'hooks'
import { alert, confirm } from 'utils'

export const Example = () => {
  const containerRef = useRef()
  const listRef = useRef()
  const [, , getCurrent] = useNavigation('Example', containerRef, listRef, 'y')
  const items = [
    { title: 'Confirm', description: 'Show Confirm Component', action: () => confirm({ title: 'Confirm', message: 'This is a confirm popup' }) },
    { title: 'Alert', description: 'Show Alert Component', action: () => alert({ title: 'Alert', message: 'This is an alert popup' }) },
    { title: 'Item 3' },
    { title: 'Item 4' },
    { title: 'Item 5' },
    { title: 'Item 6' }
  ]

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

  return <div ref={containerRef}>
    <ListView header='Example Page' items={items} containerRef={listRef} />
  </div>
}
