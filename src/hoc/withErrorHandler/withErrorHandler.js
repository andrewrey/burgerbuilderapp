import React, { Component } from "react";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {}
    render() {
      return (
        <Aux>
          <Modal>Something Didn't Work!</Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
