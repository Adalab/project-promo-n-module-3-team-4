class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatar: '' };
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }

  render() {
    return (
      <div>
        <GetAvatar avatar={this.state.avatar} updateAvatar={this.updateAvatar} />
        <Profile avatar={this.state.avatar} />
      </div>
    );
  }
}

export default card;