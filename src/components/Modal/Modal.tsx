import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const Modal = ({ children }) => {
  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
