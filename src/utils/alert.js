import { usePopup } from 'hooks'
import { Alert } from 'components'

export const alert = ({
  title, message, onSubmitText, onSubmit = () => {}
}) => {
  const [showAlertDialog] = usePopup(Alert, { stack: true })
  showAlertDialog({ title, message, onSubmitText, onSubmit })
}
