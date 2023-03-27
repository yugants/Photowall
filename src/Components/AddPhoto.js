import React, { Component } from 'react';


class AddPhoto extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(event){
        // Stops page from reloading
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        // console.log(imageLink, description);
        const post = {
            id : Number(new Date()),
            imageLink: imageLink,
            description: description
        };
        if (imageLink && description){
            this.props.onPhoto(post);
        }

    }

    render() {
        return (
            <div>
                <h1>PhotoWall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='Link' name='link' />
                        <input type="text" placeholder='Discription' name='description' />
                        <button> Post </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;