import React from 'react';
import Draggable from 'react-draggable';
import '../App.css'; // Import App.css for styling

function MyComponent() {
  return (
    <div className="parentDiv">
      <Draggable>
        <div className="childDiv">
          {/* Your content for the child div goes here */}
        </div>
      </Draggable>
    </div>
  );
}

export default MyComponent;
