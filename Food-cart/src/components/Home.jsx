import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import TopPicks from './TopPicks'

function Home({handleAdd}) {
  return (
    <>
<div>
<Hero/>
    <Delivery/>
    <TopPicks handleAdd={handleAdd}/>
</div>
    </>
  )
}

export default Home