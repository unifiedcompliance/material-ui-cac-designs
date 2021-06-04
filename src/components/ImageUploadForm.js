import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Typography } from "@material-ui/core";

class ImageUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  handleChange(files) {
    this.setState({
      files: files,
    });
  }
  render() {
    return (
      <>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Logo
        </Typography>
        <DropzoneArea onChange={this.handleChange.bind(this)} />
      </>
    );
  }
}

export default ImageUploadForm;
