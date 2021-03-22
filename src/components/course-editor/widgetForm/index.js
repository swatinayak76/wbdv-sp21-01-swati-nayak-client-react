import React from "react";
import HeadingWidget from "../../widgets/heading-widget";
import ParagraphWidget from "../../widgets/paragraph-widget";

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
            {/* <div className=" btn-up bg-warning ml-2">
              <i className="fas fa-arrow-up"></i>
            </div>
            <div className=" btn-down bg-warning ml-2">
              <i className="fas fa-arrow-down"></i>
            </div> */}
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
          <HeadingWidget
            widget={widget}
            handleWidgetFormFields={handleWidgetFormFields}
          />
        ) : null}

        {widget.type === "Paragraph" ? (
          <ParagraphWidget
            widget={widget}
            handleWidgetFormFields={handleWidgetFormFields}
          />
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
