// Not using right now

import React, { useState } from "react";

const ModalContext = React.createContext({
  activeModal: false,
  showActiveModalHandler: () => {},
  closeActiveModalHandler: () => {},
});

export const ModalContextProvider = (props) => {
  const [activeModal, setActiveModal] = useState(false);

  const showActiveModalHandler = () => {
    return setActiveModal(true);
  };

  const closeActiveModalHandler = () => {
    return setActiveModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        activeModal: activeModal,
        showActiveModalHandler: showActiveModalHandler,
        closeActiveModalHandler: closeActiveModalHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
