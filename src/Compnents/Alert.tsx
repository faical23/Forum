import {useState,useEffect} from "react"
import {Alert} from '../Interfaces'



const AlertNotification = (props:Alert) => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <>
      {
            showAlert ? 
            <div
                className={
                    "right-0 w-3/12	 fixed z-50	 text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
                    props?.color +
                    "-500"
                }
                style={{position: "fixed",zIndex:"1000"}}
                >
                <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                </span>
                <span className="inline-block align-middle mr-8">
                    {props?.message}
                </span>
                <button
                    className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                    onClick={() => setShowAlert(false)}
                >
                    <span>×</span>
                </button>
            </div>
            : 
            null
       }
    </>
  );
};

export default AlertNotification;