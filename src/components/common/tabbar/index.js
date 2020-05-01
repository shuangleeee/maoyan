import React from "react"
import {
    BrowserRouter as Router,
    NavLink,
} from "react-router-dom"
import Home from "@views/Home"
import Show from "@views/Show"
import Mine from "@views/Mine"
import style from "@assets/css/tabbar.module.css"
class TabBar extends React.Component {
    constructor() {
        super()
        this.state = {
            tabs: [
                {
                    path: "/",
                    component: Home,
                    icon: "\ue717",
                    text: "电影/影院"
                },
                {
                    path: "/myshow",
                    component: Show,
                    icon: "\ue625",
                    text: "演出"
                },
                {
                    path: "/mine",
                    component: Mine,
                    icon: "\ue8bf",
                    text: "我的"
                }
            ]

        }
    }

    render() {
        return (
            <div className={style.tabbar}>
                <Router>
                    <ul className={style.ul}>
                        {
                            this.state.tabs.map((item, index) => (
                                <li key={item.path} className={style.li}>
                                    <NavLink to={item.path}>
                                        <i className={"iconfont " + style.i}>{item.icon}</i>
                                        <span className={style.span}>{item.text}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </Router>
            </div>
        )
    }
}

export default TabBar