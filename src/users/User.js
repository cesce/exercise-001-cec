const User = ({ user }) => {
  const { first, last, large, country } = user;

  if (Object.keys(user).length === 0) {
    return <div>There is an error retrieving User info</div>;
  } else {
    return (
      <div>
        <div className="userInfo">
          <div className="userText">First Name: {first}</div>
          <div className="userText">Last Name: {last}</div>
          <div className="userText">Country: {country}</div>
        </div>
        <div className="userInfo">
          <img alt="User profile" src={large}></img>
        </div>
      </div>
    );
  }
};

export default User;
