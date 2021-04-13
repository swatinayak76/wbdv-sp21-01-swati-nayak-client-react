import React from "react";

const ImageWidget = ({widget, handleWidgetFormFields}) => {
  
  return (
    <>
      <div className="col-md-12 mt-2 order-3">
        <div className="form-group">
          <input
            className="form-control"
            name="src"
            value={widget.src}
            onChange={handleWidgetFormFields}
            placeholder="Image URL"
          />
        </div>
      </div>
      <div className="col-md-12 mt-2 order-3">
        <div className="form-group">
          <input
            className="form-control"
            name="width"
            value={widget.width}
            onChange={handleWidgetFormFields}
            placeholder="Image width"
          />
        </div>
      </div>
      <div className="col-md-12 mt-2 order-3">
        <div className="form-group">
          <input
            className="form-control"
            name="height"
            value={widget.height}
            onChange={handleWidgetFormFields}
            placeholder="Image height"
          />
        </div>                        
      </div>
    </>
  );
};

export default ImageWidget;
