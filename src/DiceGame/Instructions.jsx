import React from 'react'
// import InGame from './DiceGame/InGame'
// Correct
import InGame from './InGame';

const Instructions = (isshow) => {
  return (
   <>
   <div className='text-end mr-8'>
    <p className='text-red-500 mt-4'>
        You Have Not Selected Any Number
    </p>
   </div>

  <InGame />
    <div className='flex justify-center mt-5'>
    <div className='bg-red-100 p-4 rounded'>
        <h1 className='text-4xl font-semibold mb-5'>How To Play Dice Game</h1>
        <p>Selcet Any Number</p>
        <p>Click On Dice Image</p>
        <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>If you get wrong guess then  2 point will be dedcuted </p>
    </div>
    
    </div>
   
   
   </>
  )
}

export default Instructions