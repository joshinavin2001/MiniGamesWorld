import React from 'react'

const Startgame = ({toogleDice}) => {
  return (
    <div>
      <div  className='h-screen flex justify-center items-center'>
          
               <div  >
            <img className='' src="./project-two-imgs/dices 1.png" alt="" />
        </div>
        <div>
            <div>
                <h1 className='text-8xl font-bold'> DICE GAME</h1>
                <div className='flex justify-end'>
                  <button onClick={toogleDice} className='bg-black py-1 px-4 text-white rounded mt-3 cursor-pointer active:scale-90'>Play Now</button>
                </div>
                
            </div>
        </div>


      </div>
   
    </div>
  )
}

export default Startgame