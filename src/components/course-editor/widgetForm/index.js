import React from "react";

const WidgetForm = ({
  setWidgetForm,
  widget,
  handleWidgetFormFields,
  saveWidget,
}) => {
  return (
    <>
      <div className="row widgets-area mx-0">
        <div className="col-md-6 order-2 order-md-1">
          <h4>{widget.type} Widget</h4>
        </div>
        <div className="col-md-6 order-1 order-md-2">
          <div className="row text-center justify-content-end">
            <div className=" btn-up bg-warning ml-2">
              <i className="fas fa-arrow-up"></i>
            </div>
            <div className=" btn-down bg-warning ml-2">
              <i className="fas fa-arrow-down"></i>
            </div>
            <select
              className="form-control custom-select txt-role ml-2"
              id="role"
              name="type"
              onChange={handleWidgetFormFields}
              style={{ marginRight: "18px" }}
            >
              <option value="Heading">Heading</option>
              <option value="Paragraph">Paragraph</option>
            </select>
          </div>
        </div>
        {widget.type === "Heading" ? (
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
        ) : null}

        {widget.type === "Paragraph" ? (
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
        ) : null}

        <div className="col-md-12 order-5">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Widget name"
              value={widget.name}
              name="name"
              onChange={handleWidgetFormFields}
            />
          </div>
        </div>
      </div>
      <div className="row publish-area py-3">
        <div className="col-12">
          <button className="btn btn-success mr-2" onClick={() => saveWidget()}>
            Save
          </button>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => setWidgetForm(false)}
          >
            Cancel
          </button>
          {/* <label>Preview</label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label> */}
        </div>
      </div>
    </>
  );
};

export default WidgetForm;
