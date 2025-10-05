import React, { createContext, useState, useContext } from 'react'
import AuthModal from '../components/AuthModal'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}