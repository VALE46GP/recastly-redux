import React from 'react';
 
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  componentDidMount() {
    this.props.handleSearchInputChange('cats', true);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
