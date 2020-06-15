import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import "./homepage.scss";

function Homepage() {
    const [userName, setUserName] = useState('');
    const history = useHistory();
    async function  handleSubmit (e){
        e.preventDefault();
        history.push(`/profile/${userName}`);
    }


    return(
      <>
          <h1>Welcome to the portfolio generator</h1>
          <h3>If you have a github account, enter your user name</h3>
          <form className={"form-gh"} action="" onSubmit={handleSubmit}>
              <input
                  placeholder={"type username"}
                  value={userName}
                  type="text"
                  onChange={event => setUserName(event.target.value)}
                  required
              />
              <button>search</button>
          </form>
      </>
    );

}

export default Homepage;
