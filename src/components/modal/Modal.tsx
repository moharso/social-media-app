import {useState} from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  // function handleClose=()=>{
  //   setShowModal(false)
  // }

  return (
    <div className="">
      <div>
        <header>
          <h4>Title</h4>
        </header>
        <main>Modal body</main>
        <footer>
          <button>Remove</button>
          <button>Adjust the details</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
