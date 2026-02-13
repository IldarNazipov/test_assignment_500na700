import { Header } from '@/components/header/Header';
import { Modal } from '@/components/modal/Modal';
import { useState } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onClick={openModal} />
      <Outlet />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
