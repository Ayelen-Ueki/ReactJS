import React, {Alert} from "react";

const MessageSuccess = (contactoID) => {
  return (
    <div>
      <Alert color="primary"> Gracias por contactarnos! Su ID de seguimiento es: {contactoID}</Alert>
    </div>
  );
};

export default MessageSuccess;
