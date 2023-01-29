import { useState } from 'react';
import { Colorbox } from "./Colorbox";

export function Addcolor() {

  const [color, setColor] = useState("royalblue");

  let colorStyle = {
    backgroundColor: color
  };

  const [colorlist, setColorlist] = useState(["Orange", "blue", "green", "red"]);

  return (
    <div>
      <input style={colorStyle} placeholder='Enter a Color' onChange={(e) => setColor(e.target.value)} value={color} />
      <button onClick={() => setColorlist([...colorlist, color])}>Add Color</button>
      {colorlist.map((clr, index) => <Colorbox key={index} color={clr} />)}
    </div>
  );
}
