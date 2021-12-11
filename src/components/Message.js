import React from "react";

const Message = ({ variant, message }) => {
  return (
    <div className="container text-center">
      <div className={`alert alert-${variant}`} role="alert">
        {message}
      </div>
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
