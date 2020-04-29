import React, {Component} from 'react';
import { NavLink, Route } from "react-router-dom";
import Check from "../Menu/Check";
import History from "../Menu/History";
import Planning from "../Menu/Planning";
import Record from "../Menu/Record";
import Categories from "../Menu/Categories";
import main from "./Main.css";
import styles from './main.module.css';
import styled from 'styled-components';
import {TabContainer, TabContent, TabPane, Row, Col, Nav, Navbar} from 'react-bootstrap';


const NavComponent = styled.nav`
    background-color: white;
    color: black;
`;


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
            <div className={main.root}>
                <Navbar></Navbar>
                <TabContainer id="left-tabs-example"
                              activeKey={this.state.activeKey}
                              onSelect={(selectedKey) => {this.selectedNav(selectedKey)}}
                >
                    <Row style={{display:'flex'}}>
                        <Col sm={3}>
                            <Nav variant="pills" className={styles.myNavLink} activeKey={this.state.activeKey} >
                                <Nav.Item>
                                    <Nav.Link eventKey="Check" >Счет</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="History" >История</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Planning" >Планирование</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Record" >Новая запись</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Categories" >Категории</Nav.Link>
                                </Nav.Item>
                            </Nav>
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