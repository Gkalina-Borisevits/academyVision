import React, { useState } from "react";
import OrderModal from "./OrderModal";
import MyButton from "../../myButton/MyButton";
import { useTranslation } from "react-i18next";

const OrderButton: React.FC = () => {
  const { t } = useTranslation("translation");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MyButton text={t("price.orderButton")} onClick={handleOpenModal} />
      <OrderModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </>
  );
};

export default OrderButton;
