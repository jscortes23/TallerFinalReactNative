import { createContext, Dispatch, SetStateAction } from 'react';

interface ModalContextType {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);