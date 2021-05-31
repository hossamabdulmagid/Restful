import { Fragment } from 'react'
import Header from './component/navbar/navbar.component'
import SinglePost from './component/singlepost/singlePost.Compoents'
import Posts from './component/posts/posts.component'
import HomePage from './component/homepage/homepage.component'
import DeletePost from './component/deletepost/deletePost.component'
import EditSinglePost from './component/editpost/editpost.component'
import { Route, Switch } from 'react-router';
import './App.css';

const App = () => {

  return (
    <Fragment>
      <Header />
      <div className="App">
        <div className="App-header">
          <div className="container">
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/posts' component={Posts} />
              <Route path='/singlepost' component={SinglePost} />
              <Route path='/deletepost' component={DeletePost} />
              <Route path='/editpost' component={EditSinglePost} />
            </Switch>
          </div>
        </div>
      </div >
    </Fragment>

  );
}


export default (App);