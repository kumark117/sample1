import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const MyCalc = () => { 

	const [input1, setInput1] = useState(0);
	const [input2, setInput2] = useState(0);
	const [result, setResult] = useState("RESULT");

	const handleInput1 = (e) => {
		setInput1(parseInt(e.target.value));
	}
	const handleInput2 = (e) => {
		setInput2(parseInt(e.target.value));
	}
	const handleClick = () => {
		//debugger;
		setResult(input1+input2);
		handleShow();
	}

	const [show, setShow] = useState(true);
  
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(
         () => {
			setResult(0+input1+input2);
		 }, [input1, input2]
	);

		return (
			<div>

            <div>
			<input name="myInput1" onChange={e=>handleInput1(e)}/>
			+
			<input name="myInput1" onChange={e=>handleInput2(e)}/>
            </div>

            <div>
				=RESULT={result}
			<Button onClick={handleClick} style={{width:80,height:30}}>
				MODAL RESULT
            </Button>
			{show && <Example show={show} handleClose={handleClose} result={result}/>}

			</div>
			
			</div>

		);
}

const Example = ({show, handleClose, result}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>MODAL: RESULT = {result}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}