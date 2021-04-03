import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 950,
});

const ShowWidgets = ({ widgets, handleWidgetEditing }) => {  
  const [widgetArr, setWidgetArr] = useState(widgets);

  useEffect(() => {
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].type === "List") {
        if (typeof widgets[i].text === "string") {
          var list = widgets[i].text.split("\n");
          widgets[i].text = list;
        }
      }
    }
    setWidgetArr(widgets);
  }, [widgets]);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      widgetArr,
      result.source.index,
      result.destination.index
    );

    setWidgetArr(items);
  };

  return (
    <>
      {widgetArr.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {widgetArr.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div
                          style={{
                            // border: "1px solid black",
                            marginBottom: "10px",
                          }}
                        >
                          <div style={{ textAlign: "right" }}>
                            <i
                              className="fas fa-cog mr-4 mt-3"
                              onClick={() => handleWidgetEditing(item)}
                            ></i>
                          </div>
                          {item.type === "Heading" ? (
                            <h1>{item.text}</h1>
                          ) : null}
                          {item.type === "Paragraph" ? (
                            <p>{item.text}</p>
                          ) : null}
                          {item.type === "List" ? (
                            item.widgetOrder ? (
                              <ol>
                                {item.text.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ol>
                            ) : (
                              <ul>
                                {item.text.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            )
                          ) : null}
                          {item.type === "Image" ? (
                            <img
                              src={item.src}
                              width={item.width}
                              height={item.height}
                            />
                          ) : null}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : null}
    </>
  );
};

export default ShowWidgets;
