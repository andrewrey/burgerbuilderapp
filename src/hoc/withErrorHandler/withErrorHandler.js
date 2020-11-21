import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    return (
      <Aux>
        <Modal>Something Didn't Work!</Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
