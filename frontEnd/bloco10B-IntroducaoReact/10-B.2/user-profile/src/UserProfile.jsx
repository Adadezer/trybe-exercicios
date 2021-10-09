import React from "react";

class UserProfile extends React.Component {
  render() {
    const {id, name, email, avatar} = this.props.user
    return(
      <div>
        <p>id: {id}</p>
        <p>nome: {name}</p>
        <p>email: {email}</p>
        <img src = {avatar} alt = 'foto avatar' />
      </div>
    );
  }
}

export default UserProfile;