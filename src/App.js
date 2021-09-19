import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ViewBucketList from "./components/view-bucket-list.component.js";
import CreateBucketList from "./components/create-bucket-list.component.js";
import EditBucketList from "./components/edit-bucket-list.component.js";
import DeleteBucketList from "./components/delete-bucket-list.component.js";
import SignInUser from "./components/signin-user.component.js";
import SignUpUser from "./components/signup-user.component.js";
function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/view" component={ViewBucketList}/>
        <Route path="/create" component={CreateBucketList}/>
        <Route path="/edit" component={EditBucketList}/>
        <Route path="/delete" component={DeleteBucketList}/>
        <Route path="/signin" component={SignInUser}/>
        <Route path="/signup" component={SignUpUser}/>
      </div>
    </Router>
  );
}

export default App;
