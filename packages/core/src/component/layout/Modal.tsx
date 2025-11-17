import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, styled } from "@mui/material";
import { useCallback } from "react";

import styles from "./Modal.module.scss";

const StyledDialog = styled(Dialog)`
  & .MuiBackdrop-root {
    background: none;
    backdrop-filter: blur(0.5em);
  }
  & .MuiDialog-paper {
    margin: 0;
    box-shadow: 0 0 0.5em var(--palette-shadow);
    background: var(--palette-normal);
    color: var(--palette-normal-text);
  }
`;

const sxContent = {
  padding: 0,
};

export type ModalProps = {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  width?: number;
  showCloseButton?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function Modal(props: ModalProps) {
  const {
    visible = false,
    onVisibleChange,
    width,
    showCloseButton = false,
    className = "",
    style,
    children,
  } = props;

  const handleClose = useCallback(() => {
    onVisibleChange?.(false);
  }, [onVisibleChange]);

  const sxDialog = {
    "& .MuiDialog-paper": {
      maxWidth: (width == null) ? "none" : `${width}px`,
    },
  };

  return (
    <StyledDialog open={visible} onClose={handleClose} scroll="body" fullWidth sx={sxDialog}>
      <DialogContent sx={sxContent}>
        <div className={`${styles.modal} ${className}`} style={style}>
          { showCloseButton && <Close onClick={handleClose} className={styles.close} /> }
          { children }
        </div>
      </DialogContent>
    </StyledDialog>
  );
}
