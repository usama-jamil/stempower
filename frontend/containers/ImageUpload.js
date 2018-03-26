import axios from 'axios';
import React from 'react';

export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: '', uploaded: 'false'};
    }
    handleSubmit(e) {
        e.preventDefault();
        let file = this.state.file;
        let formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        let metadata = {
            name: "sophia-pic",
            size: file.size,
            type: file.type,
            lastModified: file.lastModifiedDate,
        };
        formData.append('metadata', JSON.stringify(metadata));
        axios.post('api/upload',formData, config)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        console.log(this.state);
    }
    handleImageChange(e) {
        //e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
            file: file,
            imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input name="profile" className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
                    <button className="submitButton" type="submit" onClick={(e) => this.handleSubmit(e)}>Upload Image</button>
                </form>
                <div className="imgPreview">{$imagePreview}</div>
            </div>
        );
    }
}

