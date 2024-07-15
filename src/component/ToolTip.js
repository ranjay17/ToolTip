// importing useState hook from React to manage the tooltip visibility state
import { useState } from 'react';

// creating a functional component named ToolTip which takes 'content' and 'position' as props
const ToolTip = ({ content, position = 'top' }) => {

  // initializing a state variable 'visible' with a default value of false
  
  const [visible, setVisible] = useState(false);

  // function to toggle the visibility of the tooltip
  const toggleTooltip = () => setVisible(!visible);

  return (
    <div className="tooltip-container">
      {/* button to trigger the tooltip on mouse enter and leave events */}
      <button
        className="tooltip-target"
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      >
        Hover me ({position})
      </button>
      {/* conditionally rendering the tooltip box based on the visibility state */}
      {visible && (
        <div className={`tooltip-box tooltip-${position}`}>
          {content}
        </div>
      )}
    </div>
  );
};

// exporting the ToolTip component as the default export
export default ToolTip;
