import React from "react";

const headingWidget = ({widget, handleWidgetFormFields}) => {
  return (
    <>
      <div className="col-md-12 mt-2 order-3">
        <div className="form-group">
          <input
            className="form-control"
            name="text"
            value={widget.text}
            placeholder="heading text"
            onChange={handleWidgetFormFields}
          />
        </div>
      </div>
      <div className="col-md-12 order-4">
        <div className="form-group">
          <select
            className="form-control custom-select"
            name="style"
            onChange={handleWidgetFormFields}
          >
            <option value="h1" selected>
              Heading 1
            </option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="h5">Heading 5</option>
            <option value="h6">Heading 6</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default headingWidget;
