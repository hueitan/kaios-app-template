import { usePopup } from 'hooks'
import { Confirm } from 'components'

export const confirm = ({
  title, message, onDiscardText, onDiscard = () => {},
  onSubmitText, onSubmit = () => {}, mode
}) => {
  const [showConfirmDialog] = usePopup(Confirm, { stack: true, mode })
  showConfirmDialog({ title, message, onDiscardText, onDiscard, onSubmitText, onSubmit })
}
