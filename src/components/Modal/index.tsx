import clsx from "clsx";
import { forwardRef, HTMLProps } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

export const MODAL_POSITIONS = {
  center: "modal-center",
  right: "right-0",
  left: "left-0",
  top: "top-0",
  "top-right": "top-0 right-0 rounded-tr-none rounded-br-none rounded-tl-none",
  "top-left": "top-0 left-0 rounded-tl-none rounded-bl-none rounded-tr-none",
  bottom: "bottom-0",
  "bottom-right":
    "bottom-0 right-0 rounded-tr-none rounded-br-none rounded-bl-none",
  "bottom-left":
    "bottom-0 left-0 rounded-tl-none rounded-bl-none rounded-br-none",
};

export interface ModalProps extends HTMLProps<HTMLDialogElement> {
  children: React.ReactNode;
  showCloseButton?: boolean;
  position?: keyof typeof MODAL_POSITIONS;
  className?: string;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    { children, showCloseButton, position = "center", className, ...props },
    ref
  ) => (
    <dialog className="modal relative" {...props} ref={ref}>
      <form
        method="dialog"
        className={clsx(
          "modal-box absolute",
          MODAL_POSITIONS[position],
          className
        )}
      >
        {children}
        {showCloseButton && (
          <Button
            shape="circle"
            className="absolute top-3 right-4"
            variant="ghost"
            type="submit"
          >
            <AiOutlineClose className="w-5 h-5" />
          </Button>
        )}
      </form>
    </dialog>
  )
);

Modal.displayName = "Modal";
export default Modal;
