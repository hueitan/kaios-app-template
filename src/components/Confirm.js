import { h } from 'preact'
import { useSoftkey } from 'hooks'

export const Confirm = ({
  title, message, dir,
  onSubmitText, onSubmit, onDiscardText, onDiscard,
  close, closeAll
}) => {
  const onDiscardFn = () => {
    onDiscard()
    close()
  }

  useSoftkey('Confirm', {
    left: onDiscardText || 'close',
    onKeyLeft: onDiscardFn,
    onKeyBackspace: onDiscardFn,
    right: onSubmitText || 'ok',
    onKeyRight: () => { onSubmit(); closeAll() }
  }, [])

  return (
    <div class='confirm' dir={dir}>
      { title && <div class='header'>{title}</div> }
      <div class='info'>{message}</div>
    </div>
  )
}
