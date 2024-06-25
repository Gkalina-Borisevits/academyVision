import React, { useState } from 'react';
import { Form, Alert, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MyButton from '../myButton/MyButton';
import "./ContactForm.css"
import styled from 'styled-components';

const CustomFormControl = styled(Form.Control)`
  &::placeholder {
    color: #888888; 
  }
`;

const ContactForm: React.FC = () => {
    const { t } = useTranslation("translation");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formValid = true;
    const { name, phone, email, message } = formData;

    const newErrors = {
      name: '',
      contact: '',
      message: '',
    };

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
      formValid = false;
    }

    if (!phone.trim() && !email.trim()) {
      newErrors.contact = 'Please enter your phone number or email';
      formValid = false;
    }

    if (!message.trim()) {
      newErrors.message = 'Please enter your message';
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      try {
        const response = await fetch('https://formspree.io/email_here', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form submitted successfully');
         
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
          });
        } else {
          console.error('Error submitting form:', response.statusText);
         
        }
      } catch (error) {
        console.error('Error submitting form:', error);
       
      }
    }
  };

  return (
    <div className="full-screen-container">
    <div className="form-container" style={{ maxWidth: '66.67%', margin: '0 auto' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>{t("contactsForm.name")}</Form.Label>
          <CustomFormControl
            type="text"
            name="name"
            placeholder={t("contactsForm.enterName")}
            value={formData.name}
            onChange={handleChange}
            className="custom-placeholder"
          />
          {errors.name && <Alert variant="danger" className="small">{errors.name}</Alert>}
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label>{t("contactsForm.phone")}</Form.Label>
              <CustomFormControl
                type="text"
                name="phone"
                placeholder={t("contactsForm.enterPhone")}
                value={formData.phone}
                onChange={handleChange}
                className="custom-placeholder"
              />
              {errors.contact && <Alert variant="danger" className="small">{errors.contact}</Alert>}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>{t("contactsForm.email")}</Form.Label>
              <CustomFormControl
                type="email"
                name="email"
                placeholder={t("contactsForm.enterEmail")}
                value={formData.email}
                onChange={handleChange}
                className="custom-placeholder"
              />
              {errors.contact && <Alert variant="danger" className="small">{errors.contact}</Alert>}
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formMessage">
          <Form.Label>{t("contactsForm.message")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder={t("contactsForm.enterMessage")}
            value={formData.message}
            onChange={handleChange}
            className="custom-placeholder"
          />
          {errors.message && <Alert variant="danger" className="small">{errors.message}</Alert>}
        </Form.Group>
          <Row className="justify-content-center">
            <Col md="auto">
          <MyButton text={t("contactsForm.send")} onClick={() => handleSubmit} active={true} />
          </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;