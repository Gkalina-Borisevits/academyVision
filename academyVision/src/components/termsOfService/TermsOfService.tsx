import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";

const TermsOfService: React.FC = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation("translation");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const privacyText = t("datenschutz.text").replace(/\n/g, "<br />");

  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        style={{
          color: "#FFDEAD",
          textDecoration: "none",
          fontSize: "12px",
          marginTop: "-10px",
        }}
      >
        {t("datenschutz.name")}
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{t("datenschutz.name")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p dangerouslySetInnerHTML={{ __html: privacyText }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <FaTimes />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TermsOfService;
