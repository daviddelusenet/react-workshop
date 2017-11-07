import React from 'react';
import './User.scss';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const Users = [{
      "name": "David de Lusenet",
      "avatar": "/img/avatars/david-l.png",
      "url": "david-l"
    }, {
      "name": "Sebastian Kersten",
      "avatar": "/img/avatars/sebastian-k.png",
      "url": "sebastian-k"
    }, {
      "name": "Heleen Emanuel",
      "avatar": "/img/avatars/heleen-e.png",
      "url": "heleen-e"
    }, {
      "name": "Ruben Nascimento",
      "avatar": "/img/avatars/ruben-n.png",
      "url": "ruben-n"
    }, {
      "name": "Ruben Zijlstra",
      "avatar": "/img/avatars/ruben-z.png",
      "url": "ruben-z"
    }, {
      "name": "Eddy Koek",
      "avatar": "/img/avatars/eddy-k.png",
      "url": "eddy-k"
    }, {
      "name": "Christiaan Mutschelknauss",
      "avatar": "/img/avatars/christiaan-m.png",
      "url": "christiaan-m"
    }];

    let userData;

    for (let user of Users) {
      if (user.url === this.props.match.params.username) {
        userData = user;
      }
    }

    return (
      <div className="Page">
        <div className="Page__inner" styleName="User">
          <img styleName="User__avatar" src={userData.avatar} />
          <p styleName="User__name">{userData.name}</p>
        </div>
      </div>
    );
  }
}

export default User;
