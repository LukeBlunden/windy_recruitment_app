import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  pointer-events: none;
  position: absolute;
  width: 80%;
  height: 500px;
  /* background-color: rgba(0,0,0,0.2); */
  background-color: transparent;
  display: grid;
`;

const Modal = styled.div`
  pointer-events: auto;
  z-index: 10;
  align-self: center;
  justify-self: center;
  background: white;
  width: 70%;
  background-color: #ffffff;
  padding: 1.5rem;
  border: 1px solid #dff1ff;
  box-shadow: 0 2px 3px lightgray;
  border-radius: 20px;

  display: ${(props) => (props.show ? `initial` : `none`)};
`;

const modal = (props) => {
  return (
    <ModalBackground>
      <Modal show={props.show}>
        {props.children}
      </Modal>
    </ModalBackground>
  );
};

export default modal;
