import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai"
import ReactModal from 'react-modal';
import styles from "./styles.module.css";

interface IModalProps {
  title: string;
  iconPath: string;
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, title, iconPath, onRequestClose, children }: IModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={styles.modalHeader}>
        <div className={styles.title}>
          <Image width={20} height={20} src={iconPath} alt="register" />
          <span>{title}</span>
        </div>
        <button
          type="button"
          onClick={onRequestClose}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div>
        {children}
      </div>
    </ReactModal>
  )
}

export { Modal }