import { h } from 'preact'
import { route } from 'preact-router'
import { useSoftkey } from 'hooks'

export const Example2 = () => {
  useSoftkey('Example2', {
    left: 'Back',
    onKeyLeft: () => {
      route('/')
    },
    onKeyBackSpace: () => { route('/') }
  })

  return <div>
    <p> Empty Content </p>
  </div>
}
