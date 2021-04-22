import { usePopup } from 'hooks'
import { Alert } from 'components'

export const alert = ({
  title, message, onSubmitText, onSubmit = () => {}, mode
}) => {
  const [showAlertDialog] = usePopup(Alert, { stack: true, mode })
  showAlertDialog({ title, message, onSubmitText, onSubmit })
}
