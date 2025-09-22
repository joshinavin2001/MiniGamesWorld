import React, { use, useState } from 'react'

const Task = () => {
  const arr = [1,2,3,4,5,6]
  const [selectNumber,setSelectedNum]=useState()
  const [currentDice,setCurrrentDice]=useState(1)
  const [increaseValue,setIncreaseValue]=useState(0)
  const [warningText,setwarningtext]=useState(false)
  const randomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min))+min
    
  }
  const rollDice=()=>{
    if(selectNumber==null){
      setwarningtext(true)
      return;
    }
    const isRandomNum = randomNumber(1,7)
    setCurrrentDice((prev)=>isRandomNum)
    setwarningtext(false)

  if (selectNumber === isRandomNum) {
    setIncreaseValue((prev) => prev + 2);
  } else {
    setIncreaseValue((prev) => prev - 2);
  
}
  }



// const rollDice = () => {
//   if (selectNumber == null) {
//     setwarningtext(true); // Show warning
//     return; // Stop function
//   }

//   const isRandomNum = randomNumber(1, 7);
//   setCurrrentDice(isRandomNum);
//   setwarningtext(false); // Hide warning if number is selected

//   if (selectNumber === isRandomNum) {
//     setIncreaseValue((prev) => prev + 2);
//   } else {
//     setIncreaseValue((prev) => prev - 2);
//   }
// };



  return (
    <div>
       <>
       <div className='flex justify-between mt-6 mx-8'> 
        <div className='text-center'>
            <h1 className='text-6xl font-bold' >{increaseValue}</h1>
            <p className='font-bold'>Total Score</p>
        </div>
        <div className='text-end'>
          <p className={`text-red-600 font-bold ${warningText?"block":"hidden"}`}>You are Not Selected Any Number</p>
          {arr.map((elem,i)=>{
            const isSelected= elem ===selectNumber
            return  <button key={i} onClick={()=>setSelectedNum(elem)} className={` border-2 py-3 px-5 ml-2 font-bold hover:bg-zinc-900 hover:text-white ` + (isSelected?'bg-black text-white':'bg-white text-black') }>{elem}</button>
          })}
         
         <p className='font-bold'>Select Number</p> 
        </div>
        </div>
       <div className='flex justify-center mt-4'> 
      <div >
            <img onClick={rollDice} className='cursor-pointer' src={`./project-two-imgs/dice_${currentDice}.png`} alt="" />
            <p className='text-center font-semibold text-2xl'>Click On Dice To Roll</p>
            <div className=' text-center'>
             <button className='border-2 py-1 mt-5 px-8 rounded'>Reset Score</button>
            </div>
            <div className='text-center'>
              <button className='bg-black text-white py-1 px-8 mt-3 rounded'>Show Rules</button> 
                    
            </div>
             
         </div>      


       </div>
   

        </>
    </div>
  )
}

export default Task