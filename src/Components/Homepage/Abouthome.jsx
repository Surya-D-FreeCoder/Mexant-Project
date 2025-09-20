import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Abouthome() {
  return (
    <div className='about-page'>
      <div className='about-heading'>
        <h4>About Us</h4>
        <h1>Know Us Better</h1>
      </div>

      <div className='about-content my-5'>
        <Container>
          <Row>
            <Col md={8}>
              <div className='about-table'>
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3 custom-tabs"
                    justify
                  >
                    <Tab eventKey="home" title="Web Design">
                      <table className='table-part' style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Arial, sans-serif" }}>
                        <thead>
                          <tr>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Project Title
                            </th>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Budget
                            </th>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Estimated
                            </th>
                            <th style={{ textAlign: "jusjustify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Technology
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Backend Coding
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$2,000 to $5,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 28</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>PHP MySQL</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              New Web App
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$1,500 to $3,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 18</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>Python Programming</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Frontend Interactions
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$3,000 to $6,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 10</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>JavaScripts</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Video Creations
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$1,800 to $4,400</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 3</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>Multimedia</td>
                          </tr>
                        </tbody>
                      </table>
                    </Tab>
                    <Tab className='table-part' eventKey="profile" title="Graphics">
                      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Arial, sans-serif" }}>
                        <thead>
                          <tr>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Project Title
                            </th>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Budget
                            </th>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Estimated
                            </th>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Technology
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Backend Coding
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$2,000 to $5,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 28</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>PHP MySQL</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              New Web App
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$1,500 to $3,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 18</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>Python Programming</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Frontend Interactions
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$3,000 to $6,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 10</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>JavaScripts</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Video Creations
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$1,800 to $4,400</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 3</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>Multimedia</td>
                          </tr>
                        </tbody>
                      </table>
                    </Tab>
                    <Tab eventKey="longer-tab" className='last-tab' title="Web Coding">
                      <table className='table-part' style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Arial, sans-serif" }}>
                        <thead>
                          <tr>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Project Title
                            </th>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Budget
                            </th>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Estimated
                            </th>
                            <th style={{ textAlign: "justify", padding: "12px", color: "#0d0d0d", fontWeight: "bold", borderBottom: "2px solid #e0e0e0" }}>
                              Technology
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Backend Coding
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$2,000 to $5,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 28</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>PHP MySQL</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              New Web App
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$1,500 to $3,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 18</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>Python Programming</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Frontend Interactions
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$3,000 to $6,000</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 10</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>JavaScripts</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "15px", borderBottom: "1px solid #e0e0e0", color: "#43ba7f", fontWeight: "bold" }}>
                              Video Creations
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>$1,800 to $4,400</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>2022 Nov 3</td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>Multimedia</td>
                          </tr>
                        </tbody>
                      </table>
                    </Tab>
                    
                  </Tabs>
              </div>
            </Col>
            <Col md={4}>
              <div className='right-content w-80 my-5'>
                <h4>Please tell us about your idea <br></br> and how you want it to be</h4> <br></br>
                <p>You are allowed to use this template for your websites. You are <strong>NOT allowed</strong> to redistribute the template ZIP file on any other template websites.</p> <br></br> <br></br>
                <p>Thank you for downloading and using our templates. Please tell your friends about our website.</p> <br></br>
                <Button variant="success">Discover More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
