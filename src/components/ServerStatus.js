
import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Button, Modal, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const ServerStatus = () => {
  const [javaStatus, setJavaStatus] = useState(null);
  const [bedrockStatus, setBedrockStatus] = useState(null);
  const [loadingJava, setLoadingJava] = useState(true);
  const [loadingBedrock, setLoadingBedrock] = useState(true);
  const [showPlayersModal, setShowPlayersModal] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchJavaStatus = async () => {
      try {
        const response = await axios.get('https://api.mcstatus.io/v2/status/java/feathersmp.uk');
        setJavaStatus(response.data);
      } catch (error) {
        console.error('Error fetching Java server status:', error);
        setJavaStatus({ online: false });
      }
      setLoadingJava(false);
    };

    const fetchBedrockStatus = async () => {
      try {
        const response = await axios.get('https://api.mcstatus.io/v2/status/bedrock/feathersmp.uk:19132');
        setBedrockStatus(response.data);
      } catch (error) {
        console.error('Error fetching Bedrock server status:', error);
        setBedrockStatus({ online: false });
      }
      setLoadingBedrock(false);
    };

    fetchJavaStatus();
    fetchBedrockStatus();
  }, []);

  const handleShowPlayersModal = (status) => {
    setSelectedServer(status);
    setShowPlayersModal(true);
  };

  const handleClosePlayersModal = () => {
    setShowPlayersModal(false);
    setSelectedServer(null);
  };

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderStatus = (status, loading, title, widgetUrl, ip) => {
    if (loading) {
      return <Spinner animation="border" variant="light" />;
    }

    return (
      <div className="text-center">
        <h3>{title}</h3>
        <Image src={widgetUrl} fluid />
        <div className="mt-2">
          {status && status.online && (
            <Button 
              variant="primary" 
              className="me-2"
              onClick={() => handleShowPlayersModal(status)} 
              disabled={!status.players.list || status.players.list.length === 0}
            >
              Show Players
            </Button>
          )}
          <CopyToClipboard text={ip} onCopy={onCopy}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-copy-ip">{copied ? 'Copied!' : 'Copy IP'}</Tooltip>}
            >
              <Button variant="secondary">
                <FaCopy />
              </Button>
            </OverlayTrigger>
          </CopyToClipboard>
        </div>
      </div>
    );
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={6}>
            {renderStatus(javaStatus, loadingJava, 'Java Edition', 'https://api.mcstatus.io/v2/widget/java/feathersmp.uk', 'feathersmp.uk')}
          </Col>
          <Col md={6}>
            {renderStatus(bedrockStatus, loadingBedrock, 'Bedrock Edition', 'https://api.mcstatus.io/v2/widget/bedrock/feathersmp.uk:19132', 'feathersmp.uk:19132')}
          </Col>
        </Row>
      </Container>

      <Modal show={showPlayersModal} onHide={handleClosePlayersModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Players Online</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedServer && selectedServer.players.list && selectedServer.players.list.length > 0 ? (
            <ul className="list-unstyled">
              {selectedServer.players.list.map((player, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <img 
                    src={`https://cravatar.eu/helmavatar/${player.name_clean}/32.png`}
                    alt={player.name_clean}
                    className="player-head"
                  />
                  {player.name_clean}
                </li>
              ))}
            </ul>
          ) : (
            <p>No players online or player list is not available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePlayersModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default memo(ServerStatus);
