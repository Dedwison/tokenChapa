import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default function Footer() {
    return (
        <div id="footer">
            <footer>
                <Container fluid="md">
                    <Row>
                        <Col md={8}>
                            <h5>
                            Tu plataforma descentralizada para el token CHAPA en Internet Computer.
                            </h5>
                            <p>Facilitamos la inversión y el intercambio de tokens CHAPA en un ecosistema seguro y transparente. Participa en nuestra oferta inicial y forma parte del futuro de las finanzas descentralizadas.</p>
                        </Col>
                        <Col md={4} className="text-md-end mt-4 mt-md-0">
                            <p>Desarrollo por Dedwison Alvarez Copyright ©2025</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}