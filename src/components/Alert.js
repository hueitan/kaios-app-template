import { h } from 'preact'
import { useSoftkey } from 'hooks'

export const Alert = ({
  title, message, dir, onSubmitText, onSubmit, close
}) => {
  useSoftkey('Confirm', {
    center: onSubmitText || 'ok',
    onKeyCenter: () => { onSubmit(); close() },
    onKeyBackspace: close
  }, [])

  return (
    <div class='confirm' dir={dir}>
      { title && <div class='header'>{title}</div> }
      <div class='info'>{message}</div>
    </div>
  )
}
