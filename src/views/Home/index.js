import React from "react"
import style from "@assets/css/home.module.css"
class Home extends React.Component{
    render(){
        return(
            <div className={style.page}>
                <header className={style.header}>
                    <div className={style.left}></div>
                    <div className={style.title}>猫眼电影</div>
                    <div className={style.right}>
                        <i className={"iconfont"}>{"\ue620"}=</i>
                    </div>
                </header>
            </div>
        )
    }
}
export default Home