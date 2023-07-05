export const drawRect= (detections, ctx) =>{
     detections.forEach(prediction=>{
    // get predictions results
    const[x,y, width, height] = prediction ['bbox'];
    const text = prediction['class'];

   // set styling
const color = '#' + Math.floor(Math.random()*16777215).toString(16);
ctx.strokeStyle = color
ctx.front = '20px Arial'
ctx.fillStyle = color

   // draw rectangle and text
ctx.beginPath()
ctx.fillText(text,x,y)
ctx.rect(x,y, width, height)
ctx.stroke()



      })



}