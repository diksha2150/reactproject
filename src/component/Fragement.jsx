import React from "react";

function Fragement() {
  let food = ["Dal", "green Vegitable", "Roti", "Salad", "milk"];
  return (
    <>
      <h1> Healthy food</h1>

      <ul class="list-group">
        {food.map((item) => (
          <>
            <button>{item}</button>
            <li class="list-group-item" style={{ backgroundColor: "gray" }}>
              {item}
            </li>
          </>
        ))}

        {/* <li class="list-group-item">Green Vegetable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk </li> */}
      </ul>
    </>
  );
}

export default Fragement;
