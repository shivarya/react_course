import React from "react";
// import Fontawesome from "react-fontawesome"
// import { Link } from 'react-router-dom'
// import Nav from "./SideNav";

const Header = () => {
    return (
        <header>
        <div className="logo" >
            The Book Shelf
        </div>
    </header>
    )
}
export default Header;

// class Header extends Component {

//     state = {
//         showNav: false
//     }

//     render() {
//         return (
//             <header>
//                 <div className="open_nav">
//                     <Fontawesome name="bars"
//                         style={{
//                             color: "#fff",
//                             padding: '10px',
//                             cursor: 'pointer'
//                         }}
//                         onClick={() => this.setState({showNav:!this.state.showNav})}
//                     />
//                 </div>
//                 <Nav
//                     showNav={this.state.showNav}
//                     onHideNav={() => this.setState({showNav:false})}
//                 />
//                 <Link to="/home" className="logo" >
//                     The Book Shelf
//                 </Link>
//             </header>
//         );
//     }
// }