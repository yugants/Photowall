import React, { Component } from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';


class Main extends Component {

  constructor() {
    // For using this keyword
    super();
    // state makes page dynamic
    this.state = {
      posts: [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg"
      }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
      }, {
        id: 2,
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }],

      // screen : 'onphoto',
    };

    // Need 'this' to work in removePhoto method
    this.removePhoto = this.removePhoto.bind(this);
    this.addPhoto = this.addPhoto.bind(this);

  }

  addPhoto(postSubmitted){
    // console.log(postSubmitted.description);
    this.setState((state) => ({
      posts : state.posts.concat([postSubmitted])
    }))
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))
  }

  // It was used during setState for page change {currently using Route for that}
  // addPhoto() {
  //   console.log('This is add photo');
  //   this.setState({
  //     screen : 'addPhoto'
  //   });
  // }

  render() {

    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <Title title='Photowall' />
            <Photowall posts={this.state.posts} removePhoto={this.removePhoto}  />
          </div>
        )} />

        {/* <Route path='/AddPhoto' component= {AddPhoto} /> */}

        <Route path='/AddPhoto'  render = {({history}) => (
          <AddPhoto onPhoto={(addedPost)=>{
            // console.log(addedPost)
            this.addPhoto(addedPost);
            history.push(`./`);
          }} />
        )}/>
      </div>
    )

  }
}
// Set State method for screen change
//   return <div>
//     {
//       this.state.screen === 'onphoto' && (
//         <div>
//           <Title title='Photowall' />
//           <Photowall posts={this.state.posts} removePhoto={this.removePhoto} addPic = {this.addPhoto}/>
//         </div>
//       )
//     }
//     {
//       this.state.screen === 'addPhoto' && (
//         <div>
//           <AddPhoto />
//         </div>
//       )
//     }
//   </div>
// }




export default Main;