// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );



class Search extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (<div className="search-bar form-inline">
              <input onKeyPress={this.props.searchOnKeyUp} className="form-control" type="text" />
              <button className="btn hidden-sm-down">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </div> )
  }
}

window.Search = Search;
