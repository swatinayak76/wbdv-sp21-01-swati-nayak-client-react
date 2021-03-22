import React from "react";

const paragraphwidget = ({ widget, handleWidgetFormFields }) => {
  return (
    <div className="col-md-12 order-4">
      <div className="form-group">
        <textarea
          className="form-control"
          name="value"
          value={widget.value}
          placeholder="Paragraph text"
          onChange={handleWidgetFormFields}
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default paragraphwidget;
