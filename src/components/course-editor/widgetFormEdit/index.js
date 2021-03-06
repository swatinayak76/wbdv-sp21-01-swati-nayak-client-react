import React from "react";
import { useDispatch } from "react-redux";

const WidgetForm = ({
  editingWidget,
  handleEditOrderField,
  setWidgetFormEdit,
  handleEditingWidgetFormFields,
  updateWidget,
  deleteWidget,
}) => {
  const dispatch = useDispatch();

  const _deleteWidget = (w) => {
    var result = window.confirm("Are you sure to delete this item?");
    if (result) {
      //Logic to delete the item
      dispatch(deleteWidget(w));
      setWidgetFormEdit(false);
    }
  };
  return (
    <>
      <div className="row widgets-area mx-0">
        <div className="col-md-6 order-2 order-md-1">
          <h4>{editingWidget.type} Widget</h4>
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
              onChange={handleEditingWidgetFormFields}
              style={{ marginRight: "18px" }}
            >
              {editingWidget.type === "Heading" ? (
                <>
                  <option value="Heading">Heading</option>
                  <option value="Paragraph">Paragraph</option>
                  <option value="List">List</option>
                  <option value="Image">Image</option>
                </>
              ) : null}
              {editingWidget.type === "Paragraph" ? (
                <>
                  <option value="Paragraph">Paragraph</option>
                  <option value="Heading">Heading</option>
                  <option value="List">List</option>
                  <option value="Image">Image</option>
                </>
              ) : null}
              {editingWidget.type === "List" ? (
                <>
                  <option value="List">List</option>
                  <option value="Heading">Heading</option>
                  <option value="Paragraph">Paragraph</option>
                  <option value="Image">Image</option>
                </>
              ) : null}
              {editingWidget.type === "Image" ? (
                <>
                  <option value="Image">Image</option>
                  <option value="Heading">Heading</option>
                  <option value="Paragraph">Paragraph</option>
                  <option value="List">List</option>
                </>
              ) : null}
            </select>
          </div>
        </div>
        {editingWidget.type === "Heading" ? (
          <>
            <div className="col-md-12 mt-2 order-3">
              <div className="form-group">
                <input
                  className="form-control"
                  name="text"
                  value={editingWidget.text}
                  placeholder="heading text"
                  onChange={handleEditingWidgetFormFields}
                />
              </div>
            </div>
            <div className="col-md-12 order-4">
              <div className="form-group">
                <select
                  className="form-control custom-select"
                  name="style"
                  onChange={handleEditingWidgetFormFields}
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

        {editingWidget.type === "Paragraph" ? (
          <div className="col-md-12 order-4">
            <div className="form-group">
              <textarea
                className="form-control"
                name="value"
                value={editingWidget.value}
                placeholder="Paragraph text"
                onChange={handleEditingWidgetFormFields}
                style={{ marginTop: "10px" }}
              />
            </div>
          </div>
        ) : null}

        {editingWidget.type === "List" ? (
          <div className="col-md-12 order-4">
            <div className="checkbox" style={{ fontSize: "20px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={editingWidget.widgetOrder}
                  onChange={() =>
                    handleEditOrderField(editingWidget.widgetOrder)
                  }
                  style={{ width: "20px", height: "20px" }}
                />
                &nbsp;&nbsp;Ordered
              </label>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                name="text"
                value={editingWidget.text
                  .toString()
                  .replace(new RegExp(",", "g"), "\n")}
                rows="5"
                placeholder="There are two types of lists: ordered and unordered. select the type of list by checking the ordered checkbox"
                onChange={handleEditingWidgetFormFields}
                style={{ marginTop: "10px" }}
              />
            </div>
          </div>
        ) : null}

        {editingWidget.type === "Image" ? (
          <>
            <div className="col-md-12 mt-2 order-3">
              <div className="form-group">
                <input
                  className="form-control"
                  name="src"
                  value={editingWidget.src}
                  onChange={handleEditingWidgetFormFields}
                  placeholder="Image URL"
                />
              </div>
            </div>
            <div className="col-md-12 mt-2 order-3">
              <div className="form-group">
                <input
                  className="form-control"
                  name="width"
                  value={editingWidget.width}
                  onChange={handleEditingWidgetFormFields}
                  placeholder="Image width"
                />
              </div>
            </div>
            <div className="col-md-12 mt-2 order-3">
              <div className="form-group">
                <input
                  className="form-control"
                  name="height"
                  value={editingWidget.height}
                  onChange={handleEditingWidgetFormFields}
                  placeholder="Image height"
                />
              </div>
            </div>
          </>
        ) : null}

        <div className="col-md-12 order-5">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Widget name"
              value={editingWidget.name}
              name="name"
              onChange={handleEditingWidgetFormFields}
            />
          </div>
        </div>
      </div>
      <div className="row publish-area py-3">
        <div className="col-12">
          {/* <button className="btn btn-success mr-2" onClick={() => updateWidget()}>
            Update
          </button> */}
          <i
            className="fa fa-check mr-4 "
            onClick={() => updateWidget()}
            title="Edit"
          ></i>
          &nbsp;&nbsp;
          <i
            className="fa fa-times"
            onClick={() => _deleteWidget(editingWidget)}
          ></i>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-secondary mr-2"
            onClick={() => setWidgetFormEdit(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default WidgetForm;
