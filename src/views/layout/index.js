import React,{Component,Fragment} from "react"
import TabBar from "@components/common/tabbar"
class LayOut extends Component{
    render(){
        return(
            <Fragment>
                {this.props.children}
                <TabBar/>
            </Fragment>
        )
    }
}
export default LayOut;