import React from 'react';
//import {BrowserRouter} from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = ()=>{
    // useEffect(() => {
    //     const script = document.createElement('script')
    
    //     script.src = "/sample.js";
    //     script.async = true
    //     script.onload = () => {
    //         window.sample(abc);
    //     }
    
    //     document.body.appendChild(script)
    
    //     return () => {
    //       document.body.removeChild(script)
    //     }
    // }, [])
    
    return (
        <div>
            {/* <BrowserRouter>
                <Route path="/" exact component={PageOne}/>
                <Route path="/PageTwo" component={PageTwo}/>
            </BrowserRouter> */}
                {/* <HashRouter>
                <Route path="/" exact component={PageOne}/>
                <Route path="/PageTwo" component={PageTwo}/>
            </HashRouter> */}
            {/* Warning: <BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`. */}
            {/* <BrowserRouter history={history}> */}
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                    <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                    <Route path="/streams/:id" exact component={StreamShow}/>
                </Switch>
                {/* <embed src="one.html"></embed> */}
            </Router>
            {/* </BrowserRouter> */}
        </div>
    );
}

export default App;