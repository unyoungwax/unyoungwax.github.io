import { Popover as PopoverInternal, type PopoverProps as PopoverPropsInternal } from "@mui/material";
import { useCallback, useMemo } from "react";

export type PopoverProps = {
  anchorEl: PopoverPropsInternal["anchorEl"];
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  anchorOrigin?: PopoverPropsInternal["anchorOrigin"];
  transformOrigin?: PopoverPropsInternal["transformOrigin"];
  zIndex?: React.CSSProperties["zIndex"];
  children?: React.ReactNode;
  disableScrollLock?: boolean;
  disableRestoreFocus?: boolean;
};

export function Popover(props: PopoverProps) {
  const {
    anchorEl,
    visible = false,
    onVisibleChange,
    anchorOrigin,
    transformOrigin,
    zIndex = 1000,
    disableScrollLock = false,
    disableRestoreFocus = false,
    children,
  } = props;

  const handleClose = useCallback(() => {
    onVisibleChange?.(false);
  }, [onVisibleChange]);

  const slotProps = useMemo(() => {
    return {
      root: {
        style: {
          zIndex,
        },
      },
    };
  }, [zIndex]);

  return (
    <PopoverInternal
      anchorEl={anchorEl}
      open={visible}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      slotProps={slotProps}
      disableScrollLock={disableScrollLock}
      disableRestoreFocus={disableRestoreFocus}
    >
      { children }
    </PopoverInternal>
  );
}
