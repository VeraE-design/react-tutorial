import React from 'react'

const Button = ({ content, bg}) =>{
    
    
    return (
<button className={`${bg} text-white mx-3 rounded-lg w-[200px] h-[40px]`}>
        {content}</button>
    )
}
const props = () => {
  return (
    <div>
      <h1>PROPS</h1>
      <Button content={"Sign Up"} bg={"bg-black"} />
      <Button content={"Log In"} bg={"bg-red-200"} />
      <Button content={"Register"} bg={"bg-green-500"} />
      <Button content={"Continue with Google"} bg={"bg-amber-400"} />
      <Button content={"Shop Now"} bg={"bg-gray-600"} />
    </div>
  );
}

export default props