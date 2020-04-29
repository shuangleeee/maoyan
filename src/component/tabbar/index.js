import React from "react"
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom"
import Home from "@views/Home"
import Show from "@views/Show"
import Mine from "@views/Mine"
import style from "@assets/css/tabbar.module.css"

class TabBar extends React.Component {
    constructor() {
        super()
        this.state = {
            tabbar: [
                {
                    path: "/",
                    component: Home,
                    icon: "&#xe717;",
                    text: "电影/影院"
                },
                {
                    path: "/myshow",
                    component: Show,
                    icon: "&#xe8bf;",
                    text: "演出"
                },
                {
                    path: "/mine",
                    component: Mine,
                    icon: "&#xe625;",
                    text: "我的"
                }
            ]

        }
    }

    render() {
        return (
            <div className={style.tabbar}>
                <Router>
                    {/*<NavLink to={"/"} className={style.a}>电影/影院</NavLink>*/}
                    {/*<NavLink to={"/myshow"}>演出</NavLink>*/}
                    {/*<NavLink to={"/mine"}>我的</NavLink>*/}
                    {
                        this.state.tabbar.map((item, index) => (
                            <div className={style.div}>
                                <NavLink to={item.path} className={style.a} key={index}>{item.text}</NavLink>
                                <span className={"iconfont "+item.icon}></span>
                            </div>
                        ))
                    }
                    <Route path={"/"} component={Home} exact></Route>
                    <Route path={"/myshow"} component={Show}></Route>
                    <Route path={"/mine"} component={Mine}></Route>
                </Router>
            </div>
        )
    }
}

export default TabBar