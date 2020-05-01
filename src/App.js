import React from 'react';
import Home from "@views/Home"
import Show from "@views/Show"
import Mine from "@views/Mine"
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import LayOut from "@views/layout"
function App() {
    return (
        <div className="app">
            <Router>
                <Route path={"/"} render={() => (
                    <LayOut>
                        <Home/>
                    </LayOut>
                )} exact></Route>
                <Route path={"/myshow"} render={() => (
                    <LayOut>
                        <Show/>
                    </LayOut>
                )}></Route>
                <Route path={"/mine"} render={() => (
                    <LayOut>
                        <Mine/>
                    </LayOut>
                )}></Route>
            </Router>
        </div>
    );
}
export default App;
