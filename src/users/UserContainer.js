import { useState, useEffect } from "react";
import User from "./User";
import "./User.css";

const mappingUser = (userApi) => {
  let user;
  if (Object.keys(userApi).length === 0) {
    user = {};
  } else {
    user = {
      first: userApi.results[0].name.first,
      last: userApi.results[0].name.last,
      large: userApi.results[0].picture.large,
      country: userApi.results[0].location.country,
    };
  }
  return user;
};

const getUser = () => {
  return fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(`error: ${err}`);
      return {};
    });
};

const UserContainer = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    getUser().then((user) => {
      setUser(mappingUser(user));
      setLoading(0);
    });
  }, []);

  const newUser = () => {
    setLoading(1);
    getUser().then((user) => {
      setUser(mappingUser(user));
      setLoading(0);
    });
  };

  return (
    <div>
      <div className="userContainer">
        <div>
          <h2>User Container</h2>
          <div className="userInfoContainer">
            <User user={user} />
          </div>
          <div className="userButton">
            <button className="userButtonInstance" onClick={newUser}>
              New User
            </button>
          </div>
        </div>
      </div>
      <div>
        {loading ? <div className="dataLoad">Loading new User</div> : null}
      </div>
    </div>
  );
};

export default UserContainer;
