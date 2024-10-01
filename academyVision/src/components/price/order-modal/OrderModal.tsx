import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import MyButton from "../../myButton/MyButton";
import { useTranslation } from "react-i18next";
import { Price } from "../../../types/Price";

interface OrderModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    selectedPlan: Price;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onRequestClose, selectedPlan  }) => {
  const { t } = useTranslation("translation");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
        email,
        phone,
        plan: selectedPlan,  
      };
  
      console.log("Order data:", orderData);
  
      toast.success(`${t("price.toasty")}${selectedPlan.title}${t("price.toasty2")}`, {});
      
      onRequestClose();
    };

  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
      <Modal.Title>{t("price.order")}: {selectedPlan.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{t("price.email")}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t("price.inputEmail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>{t("price.phone")}</Form.Label>
            <Form.Control
              type="tel"
              placeholder={t("price.inputPhone")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>{t("price.message")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={t("price.placeholderMessage")}
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
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
