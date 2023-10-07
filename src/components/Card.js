import React from 'react'

const Card = () => {
  return (
    <div className="w-full  p-3">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="https://dummyimage.com/400x250" alt="Founder Image" />
            <div className="p-5">
              <h3 className="text-white font-semibold mb-2">Founder's Name</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet semper lacus. Quisque varius erat velit, vel pulvinar quam feugiat non. Phasellus non felis elit. Nullam at risus metus.</p>
            </div>
          </div>
        </div>
  )
}

export default Card
