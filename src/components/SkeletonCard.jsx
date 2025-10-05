import React from 'react'

const SkeletonCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-80 bg-gray-700"></div>
      <div className="p-4">
        <div className="h-6 w-3/4 bg-gray-700 rounded"></div>
      </div>
    </div>
  )
}

export default SkeletonCard