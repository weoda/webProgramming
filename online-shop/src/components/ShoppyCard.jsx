import React from "react";

export default function ShoppyCard(props) {
  console.log(props.items);
  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        border: "1px solid black",
        borderRadius: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ height: "60%" }}></div>
      <div
        style={{
          borderTop: "1px solid black",
          height: "40%",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "25px", fontWeight: "500" }}>
          {props.items.name}
        </div>
        <div style={{ marginTop: "5px" }}>{props.items.description}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            top: "40px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>{`ҮНЭ: ${props.items.price}`}</div>
          <div
            onClick={() => {}}
            style={{
              backgroundColor: "rgb(248, 98, 161)",
              color: "white",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            ЗАХИАЛАХ
          </div>
        </div>
      </div>
    </div>
  );
}
