import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      this.setState({
        item: this.props.location.state.item,
      });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.item ?
            <div>
              <span>{JSON.stringify(this.state.item)}</span>
            </div>
          : ""
        }
      </div>
    )
  }
}

export default Detail;
