import React from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

/**
 * @todo
 * ubahlah implementasi stateful component dari class ke function
 * dengan memanfaatkan useState().
 */

 function ToggleLampFunc() {
  const [lamp, setLamp] = React.useState('off');
 
  const toggleLamp = () => {
    setLamp((prevLamp) => {
      return prevLamp === 'off' ? 'on' : 'off';
    });
  };
 
  return (
    <div className={lamp}>
      <button onClick={toggleLamp}>{lamp === 'on' ? <FaLightbulb /> : <FaRegLightbulb />}</button>
      <h3>hooks keren!</h3>
    </div>
  );
}


export default ToggleLampFunc;
