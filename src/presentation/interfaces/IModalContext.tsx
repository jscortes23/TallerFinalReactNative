import { Dispatch, SetStateAction } from "react";

export interface IModalContext {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>
}