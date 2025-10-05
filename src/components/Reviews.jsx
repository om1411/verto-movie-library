import React from 'react'

const reviews = [
  { name: 'Virat Kohli', quote: "The best movie tracking app I've ever used. So intuitive and fast!" },
  { name: 'Rohit Sharma', quote: "Finding new movies to watch has never been easier. My watchlist is full!" },
  { name: 'Shubhman Gill', quote: "A sleek design and seamless experience. Highly recommend to all movie lovers." },
  { name: 'Varun Dhawan', quote: "This app completely changed how I discover new films. The user interface is brilliant and it works flawlessly." },
  { name: 'Akshay Kumar', quote: "My go-to for keeping track of what to watch next. The watchlist feature is a game-changer." },
  { name: 'SRK', quote: "Finally, an app that understands a true cinephile. The performance is amazing and it's an essential tool for any film enthusiast." }
];

const Reviews = () => {
  return (
    <div className="px-8 py-12 bg-gray-900 text-white"> 
      <h2 className="text-3xl font-bold text-center mb-8">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg 
                       border-2 border-emerald-600/50 hover:border-emerald-500 
                       transform transition-all duration-300 hover:scale-105 
                       cursor-pointer shadow-lg hover:shadow-2xl"
          >
            <p className="text-gray-300 italic mb-4 text-lg">"{review.quote}"</p>
            <p className="text-right font-bold mt-4 text-emerald-400">- {review.name}</p> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews