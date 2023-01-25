import React from 'react'

function Nav() {
  return (
    <div className="width-full bg-orange-600 h-24 flex items-center justify-around text-white">
        <div className="flex gap-4">
          <div>
            <h4>KENYA DEFENSIVE</h4>
            <h4> DRIVING SCHOOL</h4>
          </div>
          <div className="w-12">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.d2P6qitmzEtkRfP-2j1qaAHaHk%26pid%3DApi&f=1&ipt=e972e3de70a5f770e1f764cbebb75705aa95033352743cd52cdd45e401d3251b&ipo=images" alt="logo" />
          </div>

        </div>
        <div className="flex gap-4">
            <p className="cursor-ponter">Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Nav