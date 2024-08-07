import React from 'react'

function Header() {
  return (
    <header>
        <div className='leftH'>
            <div className='headerItem'>
                Swap
            </div>
            <div className='headerItem'>
                Tokens
            </div>
        </div>
        <div className='rightH'>
            <div className='connectButton'>
                Connect
            </div> 
        </div>
    </header>
  )
}

export default Header