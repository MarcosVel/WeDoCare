import './Faq.css';
import { Accordion, Card } from 'react-bootstrap';
import Dropdown from '../../assets/Dropdown.svg';

function Faq() {
  return (
    <section className="faq_section">
      <div className="faq_div">
        <h3 className="faq_title">Perguntas Frequentes</h3>
        <Accordion defaultActiveKey="0">
          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="0" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="1" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="2" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="3" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="4" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="5" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="6" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="7" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>
          
          <Card className="faq_card">
            <Accordion.Toggle as={ Card.Header } eventKey="8" className="faq_cardHeader">
              <img src={ Dropdown } className="faq_dropIcon" />
              Eu posso fazer só um curso específico ou preciso participar de todos?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8" className="faq_cardBody">
              <Card.Body className="faq_txtCardBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq;
