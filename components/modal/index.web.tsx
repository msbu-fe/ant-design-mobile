import Modal from './Modal.web';
import alert from './alert.web';
import prompt from './prompt';

(Modal as any).alert = alert;
(Modal as any).prompt = prompt;

export default Modal;
