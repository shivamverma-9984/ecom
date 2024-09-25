import React from 'react'
import "./modal.css"

export const modal = () => {
    return (
      <div
        className="modal-container"
       
      >
        <div className="modal">
          <div
            className="modal-header"

          >
            <p className="close">&times;</p>
          </div>
          <div className="modal-content">{children}</div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-submit"
             
            >
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };