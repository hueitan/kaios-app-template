import { usePopup } from 'hooks'
import { Confirm } from 'components'

export const confirm = ({
  title, message, onDiscardText, onDiscard = () => {},
  onSubmitText, onSubmit = () => {}
}) => {
  const [showConfirmDialog] = usePopup(Confirm, { stack: true })
  showConfirmDialog({ title, message, onDiscardText, onDiscard, onSubmitText, onSubmit })
}
