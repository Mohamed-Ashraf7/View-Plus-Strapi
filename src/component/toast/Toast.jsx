import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

export const Toast = () => {
  return (
    <Toaster
      position="top-right"
      style={{ zIndex: 999999999999999 }}
      containerStyle={{
        top: 120,
        right: 20,
      }}
    />
  );
};
export const sucess = (message) => {
  toast(message, {
    style: {
      backgroundColor: "#00695c",
      color: "white",
      padding: ".8rem",
    },
    icon: <i className="far fa-smile"></i>,
  });
};
export const failed = (message) => {
  toast(message, {
    style: {
      backgroundColor: "#b91616",
      padding: ".8rem",
      color: "white",
    },
    icon: <i className="fas fa-exclamation-circle"></i>,
  });
};
