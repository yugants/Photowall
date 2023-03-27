// import React, {Component} from 'react';
import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// function component
function Photowall(props){
    return <div>
        {/* Code for button and html link */}
        {/* <a href="#AddPhoto" className='add-icon' onClick={() => props.addPic() }> Click</a> */}
        {/* <button className='add-icon' onClick={() => props.addPic() }>  </button> */}

        {/* This is react Link managed by BrowserRouter from index.js file */}
        <Link to="/AddPhoto" className='add-icon' > </Link>
        <div className='photo-grid'>
        {props.posts
        .sort(function(x,y){
            return y.id - x.id
        })
        .map((post, index) => <Photo key = {index} post={post} removePhoto={props.removePhoto}/>)}
        </div>
    </div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    removePhoto: PropTypes.func.isRequired
}

// CLass Components
// class Photowall extends Component{
//     render(){
//         return <div className='photo-grid'>
//                 {this.props.posts.map((post, index) => <Photo key = {index} post={post} />)}
//                 </div>
//     }
// }

export default Photowall;