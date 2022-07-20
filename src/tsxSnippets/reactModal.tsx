import React, { useCallback, useMemo } from "react";
import { IconDefinition, faTimes } from "@fortawesome/pro-solid-svg-icons";
import ReactModal from "react-modal";

import {
  StyledModal,
  StyledOverlay,
  StyledModalContentWrapper,
  StyledModalHeader,
  StyledModalHeaderText,
  StyledModalCloseIcon,
  StyledModalFooter,
} from "components/modal/ModalStyles";
import Icon from "components/shared/styled/Icon";
import { TextSize } from "theme/defaultTheme";

ReactModal.setAppElement("#root");

const Modal = ({
  modalContent,
  modalIsOpen,
  showHeader,
  headerContent,
  toggleModal,
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
  closeTimeoutMS = 150,
  onAfterOpen,
  onAfterClose,
  shouldReturnFocusAfterClose = false,
  shouldFocusAfterRender = true,
  showCloseButton,
  title,
  titleIcon,
  footerContent,
  maxHeight,
  withOverflow,
  contentWrapperHeight,
  modalMaxWidth,
  animatedModal,
  lightHeader = false,
}: ModalProps) => {
  const RenderModalOverlay = useCallback(
    (props: any, contentElement: React.ReactNode) => (
      <StyledOverlay animatedModal={animatedModal} {...props}>
        {contentElement}
      </StyledOverlay>
    ),
    [animatedModal],
  );

  const RenderModalContent = useCallback(
    (props: any, children: React.ReactNode) => (
      <StyledModal
        maxHeight={maxHeight}
        withOverflow={withOverflow}
        modalMaxWidth={modalMaxWidth}
        {...props}
      >
        {children}
      </StyledModal>
    ),
    [maxHeight, modalMaxWidth, withOverflow],
  );

  const renderModalHeader = useMemo((): React.ReactNode => {
    if (headerContent) {
      return headerContent;
    }
    return (
      <>
        {titleIcon && (
          <Icon faIcon={titleIcon} size={TextSize.lg} marginRight="1.0rem" />
        )}
        <StyledModalHeaderText>{title}</StyledModalHeaderText>
        {showCloseButton && (
          <StyledModalCloseIcon
            faIcon={faTimes}
            onClick={toggleModal}
            size={TextSize.lg}
            clickable
            data-cy="modalClose"
          />
        )}
      </>
    );
  }, [headerContent, showCloseButton, title, titleIcon, toggleModal]);

  return (
    <ReactModal
      className={animatedModal ? "animatedModal" : "_"}
      overlayClassName="_"
      portalClassName="CustomPortal"
      onRequestClose={toggleModal}
      isOpen={modalIsOpen}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
      shouldFocusAfterRender={shouldFocusAfterRender}
      contentLabel={title}
      closeTimeoutMS={closeTimeoutMS}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      contentElement={RenderModalContent}
      overlayElement={RenderModalOverlay}
    >
      {showHeader && (
        <StyledModalHeader lightHeader={lightHeader}>
          {renderModalHeader}
        </StyledModalHeader>
      )}
      <StyledModalContentWrapper
        height={contentWrapperHeight}
        className="ModalContentWrapper"
      >
        {modalContent}
      </StyledModalContentWrapper>
      {footerContent && <StyledModalFooter>{footerContent}</StyledModalFooter>}
    </ReactModal>
  );
};
export default Modal;


