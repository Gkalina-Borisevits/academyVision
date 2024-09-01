import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";

const Impressum : React.FC = () => {
    const [show, setShow] = useState(false);
    const { t } = useTranslation("translation");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const privacyText = t("impressum.text").replace(/\n/g, "<br />");
  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        style={{
          color: "#FFDEAD",
          textDecoration: "none",
          fontSize: "24px",
          marginTop: "-10px",
        }}
      >
        {t("impressum.name")}
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{t("impressum.name")}</Modal.Title>
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
  )
}

export default Impressum
