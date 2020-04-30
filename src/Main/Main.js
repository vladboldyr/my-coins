import React, {Component} from 'react';
import { NavLink, Route } from "react-router-dom";
import Check from "../Menu/Check";
import History from "../Menu/History";
import Planning from "../Menu/Planning";
import Record from "../Menu/Record";
import Categories from "../Menu/Categories";
import main from "./Main.css";
import styled from 'styled-components';
import {TabContainer, TabContent, TabPane, Row, Col, Nav, Navbar} from 'react-bootstrap';


const NavComponent = styled.nav`
    background-color: white;
    color: black;
`;

const link = {
    color: "black"
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey : 'Check'
        };
    }

    selectedNav(selectedKey) {
        this.setState({activeKey:selectedKey});
    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"orange"}}>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className={main.root}>

                    <TabContainer id="left-tabs-example"
                                  activeKey={this.state.activeKey}
                                  onSelect={(selectedKey) => {this.selectedNav(selectedKey)}}
                    >
                        <Row style={{display:'flex'}}>
                            <Col sm={3}>
                                <NavComponent variant="pills" className="flex-column" activeKey={this.state.activeKey} >
                                    <Nav.Item>
                                        <Nav.Link eventKey="Check" style={link}>Счет</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="History" style={link}>История</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Planning" style={link}>Планирование</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Record" style={link}>Новая запись</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Categories" style={link}>Категории</Nav.Link>
                                    </Nav.Item>
                                </NavComponent>
                            </Col>
                            <Col sm={9}>
                                <TabContent>
                                    <TabPane eventKey="History">
                                        <History />
                                    </TabPane>
                                    <TabPane eventKey="Check">
                                        <Check />
                                    </TabPane >
                                    <TabPane eventKey="Planning">
                                        <Planning />
                                    </TabPane>
                                    <TabPane eventKey="Record">
                                        <Record />
                                    </TabPane>
                                    <TabPane eventKey="Categories">
                                        <Categories />
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </TabContainer>



                </div>
            </div>
        );
    }
}
/*
 <Route path="/check" exact component={Check}/>
                <Route path="/history" exact component={History}/>
                <Route path="/planning" exact component={Planning}/>
                <Route path="/record" exact component={Record}/>
                <Route path="/categories" exact component={Categories}/>
* */
export default Main;