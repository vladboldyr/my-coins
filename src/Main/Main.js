import React, {Component} from 'react';
import { NavLink, Route } from "react-router-dom";
import Check from "../Menu/Check";
import History from "../Menu/History";
import Planning from "../Menu/Planning";
import Record from "../Menu/Record";
import Categories from "../Menu/Categories";
import MenuList from '@material-ui/core/MenuList';
import main from "./Main.css";
import MenuItem from "@material-ui/core/MenuItem";

class Main extends Component {
    render() {
        return (
            <div className={main.root}>
                <MenuList>
                    <MenuItem>
                        <NavLink to="/check">Счет</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/history">История</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/planning">Планирование</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/record">Новая запись</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/categories">Категории</NavLink>
                    </MenuItem>


                    <Route path="/check" exact component={Check}/>
                    <Route path="/history" exact component={History}/>
                    <Route path="/planning" exact component={Planning}/>
                    <Route path="/record" exact component={Record}/>
                    <Route path="/categories" exact component={Categories}/>
                </MenuList>
            </div>
        );
    }
}

export default Main;