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
    // var query=this.refs.searchInput.getDOMNode().value;

    return (<div className="search-bar form-inline">
              <input onKeyUp={this.props.searchOnKeyUp.bind(this)} ref="searchInput" className="form-control" type="text" />
              <button className="btn hidden-sm-down">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </div> )
  }
}

window.Search = Search;


// var SearchBox = React.createClass({
//     doSearch:function(){
//         var query=this.refs.searchInput.getDOMNode().value; // this is the search text
//         this.props.doSearch(query);
//     },
//     render:function(){
//         return <input type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>
//     }
// });

