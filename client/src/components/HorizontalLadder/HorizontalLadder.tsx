import React from 'react';
import "./HorizontalLadder.min.css";

const HorizontalLadder = () => {
  return (
    <div className="horizontalLadderContainer">
        <div className="horizontalLadderWrapper">
            <button className="ladderElement" autoFocus >Upcoming</button>
            <button className="ladderElement">Complete</button>
            <button className="ladderElement">Canceled</button>
        </div>
    </div>
  )
}

export default HorizontalLadder;