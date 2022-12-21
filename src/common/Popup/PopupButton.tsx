import React, { useState } from 'react';
import { Modal } from 'antd';
import {
    CustomButton
} from './PopupButton.styled'
interface IPopupButton {
    children?: React.ReactNode
    title ?: string
}

const PopupButton = ({children, title} : IPopupButton) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomButton type="primary" onClick={showModal}>
        Open Modal
      </CustomButton>
      <Modal title={title} open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel} 
      cancelButtonProps = {{style : {padding: '5px 20px',height: '100%'}}}
      okButtonProps = {{style : {padding: '5px 20px',height: '100%'}}}>
        {children || 'dsada'}
      </Modal>
    </>
  );
};

export default PopupButton;