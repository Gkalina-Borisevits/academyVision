import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import MyButton from "../../myButton/MyButton";
import { useTranslation } from "react-i18next";

interface OrderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onRequestClose }) => {
  const { t } = useTranslation("translation");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Прекрасный выбор! Мы свяжемся с вами в ближайшее время", {});
    onRequestClose();
  };

  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>Оформить заказ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите вашу почту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Введите ваш номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <MyButton text={t("price.orderButton")}></MyButton>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
