// var Nav = () => (
//   <nav className="navbar">
//     <div className="col-md-6 col-md-offset-3">
//       <Search />
//     </div>
//   </nav>
// );


class Nav extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<nav className="navbar">
              <div className="col-md-6 col-md-offset-3">
                <Search searchOnKeyUp={this.props.searchOnKeyUp}/>
              </div>
            </nav>)
  }
}

window.Nav = Nav;
