import{j as e}from"./jsx-runtime.D4yicUPj.js";import{r as i}from"./index.B78kqCuL.js";import{m as t}from"./motion.BeIO3Ssy.js";const u=({icon:r="../icons/temp.svg",title:o="Title",body:s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis."})=>{const[l,a]=i.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col relative cursor-pointer text-black",children:[e.jsx(t.div,{animate:{margin:l?"0px":"12px"},transition:{duration:.3},className:"bg-black shadow-2xl w-full h-full absolute rounded-lg"}),e.jsx(t.div,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),whileHover:{opacity:.8},transition:{duration:.8},className:"border-2 border-gray-400 w-full h-full bg-lime-300  rounded-lg p-4 relative flex justify-between",children:e.jsx("p",{children:s})})]})})};export{u as default};