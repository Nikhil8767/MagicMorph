// import React, { useRef, useState } from 'react';
// import CanvasDraw from 'react-canvas-draw';

// const Morph = () => {
//   const canvasRef = useRef(null);
//   const [color,setColor]=useState('#000000');
//     const [size,setSize]=useState(4);
//     const [eraser,setEraser]=useState(false);

//   const handleSave = () => {
//     const data = canvasRef.current.getSaveData();
//     alert('the update is coming soon..')
//     console.log("Saved Drawing:", data);
     
    
//   };

//   const handleClear = () => {
//     canvasRef.current.clear();
//   };
//   const ToggleEraser=()=>{
//     setEraser(!eraser)
//   }
//   const disableEraser=()=>{
//     setEraser(false);
//   }

//   return (
//     <div className='flex flex-col items-center mt-10'>
//       <h1 className='text-2xl font-bold mb-4'>Draw Anything You Like ✏️</h1>
//       <CanvasDraw 
//         ref={canvasRef}
//         brushRadius={size}
//         brushColor={eraser ? '#FFFFFF':color}
//         canvasWidth={1000}
//         canvasHeight={500}
//         lazyRadius={1}
//         hideGrid
//         className="border shadow-lg rounded-lg"
//       />
//       <div className='flex gap-4 mt-4'>
//         <label>
//             color:
//             <input className='border rounded' type="color" placeholder='enter the color you want' value={color} onChange={(e)=>{setColor(e.target.value); setEraser(false) }} disabled={eraser}/>
//         </label>
//         <label>brush:
//             <input className='border rounded' type="range" min="2" max="46" placeholder='enter the size you  want' value={size} onChange={(e)=>setSize(e.target.value)} />
//         </label>
//         <button onClick={()=>setEraser(!eraser)} className={`${eraser ? 'bg-yellow-300':'bg-blue-500'} text-whitepx-4 py-2 rounded`}>{eraser? 'eraser on':'eraser off'}</button>
        
//         <button onClick={handleSave} className='bg-green-500 text-white px-4 py-2 rounded'>Save</button>
//         <button onClick={handleClear} className='bg-red-500 text-white px-4 py-2 rounded'>Clear</button>
//       </div>
//     </div>
//   );
// };

// export default Morph;
import React, { useRef, useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

const Morph = () => {
  const [lines, setLines] = useState([]);
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [eraser, setEraser] = useState(false);

  const stageRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool: eraser ? 'eraser' : 'pen', points: [pos.x, pos.y], stroke: eraser ? '#ffffff' : color, strokeWidth: size }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    const updatedLines = [...lines.slice(0, -1), lastLine];
    setLines(updatedLines);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    setLines([]);
  };

  const toggleEraser = () => {
    setEraser(!eraser);
  };

  return (
    <div className='flex flex-col items-center mt-10'>
      <h1 className='text-3xl font-bold mb-6'>Draw Anything 🎨</h1>

      <Stage
        width={1000}
        height={500}
        ref={stageRef}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        className='border shadow-lg rounded-lg bg-white'
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.stroke}
              strokeWidth={line.strokeWidth}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
            />
          ))}
        </Layer>
      </Stage>

      <div className='flex gap-4 mt-4'>
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => { setColor(e.target.value); setEraser(false); }}
            className='ml-2 border rounded'
          />
        </label>

        <label>
          Brush:
          <input
            type="range"
            min="2"
            max="50"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className='ml-2'
          />
        </label>

        <button onClick={toggleEraser} className={`${eraser ? 'bg-yellow-400' : 'bg-blue-500'} text-white px-4 py-2 rounded`}>
          {eraser ? 'Eraser On' : 'Eraser Off'}
        </button>

        <button onClick={handleClear} className='bg-red-500 text-white px-4 py-2 rounded'>Clear</button>
      </div>
    </div>
  );
};

export default Morph;
