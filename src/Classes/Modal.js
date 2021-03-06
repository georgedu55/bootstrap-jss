import { zindexModal, zindexModalBackdrop } from '../Variables/Zindex'
import {
  modalDialogMargin, modalTransition,
  modalContentBg, modalContentBorderWidth, modalContentBorderColor, modalContentBorderRadius,
  modalContentBoxShadowXs, modalBackdropBg, modalBackdropOpacity,
  modalHeaderPadding, modalHeaderBorderWidth, modalHeaderBorderColor,
  modalTitleLineHeight, modalInnerPadding, modalFooterBorderWidth, modalFooterBorderColor,
  modalMd, modalDialogMarginYSmUp, modalContentBoxShadowSmUp, modalSm, modalLg
} from '../Variables/Modals'
import { transition } from '../Mixins/transition'
import { size } from '../Functions/size'
import { borderRadius, borderTopRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import { gridBreakpoints } from '../Variables/Grid'
import { close } from '../Classes/Close'

const modalOpen = {
  overflow: 'hidden'
}

const modal = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: zindexModal,
  display: 'none',
  overflow: 'hidden',
  outline: 0,
  '&$modalOpen &': {
    overflowX: 'hidden',
    overflowY: 'auto'
  }
}

const modalDialog = {
  position: 'relative',
  width: 'auto',
  margin: modalDialogMargin,
  pointerEvents: 'none',
  '&$modal$fade &': {
    ...transition(modalTransition),
    transform: `translate(0, -25%)`
  },
  '&$modal$show &': {
    transform: `translate(0, 0)`
  }
}

const modalDialogCentered = {
  display: 'flex',
  alignItems: 'center',
  minHeight: `calc(100% - ${size(modalDialogMargin).value * 2}${size(modalDialogMargin).unit}))`
}

const modalContent = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  pointerEevents: 'auto',
  backgroundColor: modalContentBg,
  backgroundClip: 'padding-box',
  border: `${modalContentBorderWidth} solid ${modalContentBorderColor}`,
  ...borderRadius(modalContentBorderRadius),
  ...boxShadow(modalContentBoxShadowXs),
  outline: 0
}

const modalBackdrop = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: zindexModalBackdrop,
  backgroundColor: modalBackdropBg,
  '&$fade': {
    opacity: 0
  },
  '&$show': {
    opacity: modalBackdropOpacity
  }
}

const modalHeader = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: modalHeaderPadding,
  borderBottom: `${modalHeaderBorderWidth} solid ${modalHeaderBorderColor}`,
  ...borderTopRadius(modalContentBorderRadius),
  '&$close': {
    padding: modalHeaderPadding,
    margin: `-${modalHeaderPadding} -${modalHeaderPadding} -${modalHeaderPadding} auto`
  }
}

const modalTitle = {
  marginBottom: 0,
  lineHeight: modalTitleLineHeight
}

const modalBody = {
  position: 'relative',
  flex: '1 1 auto',
  padding: modalInnerPadding
}

const modalFooter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: modalInnerPadding,
  borderTop: `${modalFooterBorderWidth} solid ${modalFooterBorderColor}`,
  '& > :not(:first-child)': {
    marginLeft: '.25rem'
  },
  '& > :not(:last-child)': {
    marginRight: '.25rem'
  }
}

const modalScrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
}

const modalResponsive = {
  ...mediaBreakpointUp('sm', gridBreakpoints, {
    '$modalDialog': {
      maxWidth: modalMd,
      margin: `${modalDialogMarginYSmUp} auto`
    },
    '$modalDialogCentered': {
      minHeight: `calc(100% - ${size(modalDialogMarginYSmUp).value * 2}${size(modalDialogMarginYSmUp).unit})`
    },
    '$modalContent': {
      ...boxShadow(modalContentBoxShadowSmUp)
    },
    '$modalSm': {
      maxWidth: modalSm
    }
  }),
  ...mediaBreakpointUp('lg', gridBreakpoints, {
    '$modalLg': {
      maxWidth: modalLg
    }
  })
}

export {
  modalOpen,
  modal,
  modalDialog,
  modalDialogCentered,
  modalContent,
  modalBackdrop,
  modalHeader,
  modalTitle,
  modalBody,
  modalFooter,
  modalScrollbarMeasure,
  modalResponsive
}
