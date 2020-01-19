/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';

import DialogStyleContainer from './Dialog.styled';

import Button from '../Button';

/**
 * Dialog component to render alert dialog with custom heading, message and actions/buttons.
 * @param {String} bgSecondaryButton
 * @param {String} colorSecondaryButton
 * @param {String} textSecondaryButton
 * @param {String} bgPrimaryButton
 * @param {String} colorPrimaryButton
 * @param {String} textPrimaryButton
 */
const Dialog = (props) => {
  const [isOpen, setOpenState] = useState(false);
  useEffect(() => setOpenState(props.openModalBox), [props.openModalBox]);

  const toggleModal = () => {
    setOpenState(!isOpen);
    if (props.onDialogClose) {
      props.onDialogClose();
    }
  };

  const _handelPrimaryButtonClick = () => {
    toggleModal();
    if (props.onPrimaryButtonClick) {
      props.onPrimaryButtonClick();
    }
  };

  const _handelSecondaryButtonClick = () => {
    toggleModal();
    if (props.onSecondaryButtonClick) {
      props.onSecondaryButtonClick();
    }
  };

  function renderDialogActionButtons() {
    return (
      <>
        {
          props.textSecondaryButton ?
            <Button
              className='button14'
              style={{ marginLeft: '8px' }}
              buttonColor={props.bgSecondaryButton ? props.bgSecondaryButton : '#4bb530'}
              fontColor={props.colorSecondaryButton ? props.colorSecondaryButton : '#000'}
              hoverColor={props.hoverSecondaryButton ? props.hoverSecondaryButton : '#a2e890'}
              activeColor={props.activeSecondaryButton ? props.activeSecondaryButton : '#42d61d'}
              hoverBoxShadow={props.hoverShadow ? props.hoverShadow : '0 1px 2px 0 rgba(9, 30, 66, 0.15), 0 0 1px 0 rgba(9, 30, 66, 0.25), 0 4px 8px 0 rgba(223, 46, 46, 0.25)'}
              activeBoxShadow='0 1px 2px 0 rgba(9, 30, 66, 0.15), 0 0 1px 0 rgba(9, 30, 66, 0.25)'
              value={props.textSecondaryButton}
              _onClick={() => _handelSecondaryButtonClick()}
              width="auto"
            />
            : ''
        }
        <Button
          className='button14'
          defaultBorder={props.defaultBorder || !props.bgPrimaryButton}
          buttonColor={props.bgPrimaryButton ? props.bgPrimaryButton : '#ffffff'}
          fontColor={props.colorPrimaryButton ? props.colorPrimaryButton : '#54555d'}
          value={props.textPrimaryButton ? props.textPrimaryButton : 'Close'}
          hoverColor='#ffffff'
          activeColor='#f8f8fa'
          hoverBoxShadow='0 1px 2px 0 rgba(9, 30, 66, 0.15), 0 0 1px 0 rgba(9, 30, 66, 0.25), 0 4px 8px 0 rgba(9, 30, 66, 0.15)'
          activeBoxShadow='0 1px 2px 0 rgba(9, 30, 66, 0.15), 0 0 1px 0 rgba(9, 30, 66, 0.25)'
          defaultBoxShadow='0 1px 2px 0 rgba(9, 30, 66, 0.15), 0 0 1px 0 rgba(9, 30, 66, 0.25)'
          _onClick={() => _handelPrimaryButtonClick()}
          width="auto"
        />
      </>
    );
  };
  return (
    <DialogStyleContainer
      {...props}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      hidden={props.hidden}
      isOpen={isOpen}
    >
      {props.heading && <div className='dialogHeading header20'>{props.heading}</div>}
      {props.body && <div className='dialogBody body16' dangerouslySetInnerHTML={{ __html: props.body }} />}
      {props.children}
      <div className='dialogDivider' />
      <div className='dialogButtonContainer'>
        {props.actionView ? props.actionView() : renderDialogActionButtons()}
      </div>
    </DialogStyleContainer>
  );

};

export default Dialog;