import React, { useEffect, useState } from 'react'


const Rating = ({initialRating, onRating}) => {
  const [rating, setRating] = useState(initialRating || 0)

  const handlerRating = (value) => {
    setRating(value);
    if(onRating) onRating(value)
  }

  useEffect(() => {
    if(initialRating) setRating(initialRating)
  }, [initialRating])
  return (

    <div>
      {Array.from({length: 5}, (_, i) => {
        const starValue = i + 1;
        return (
          <span key={i} className={`text-xl sm:text-2xl cursor-pointer transition-colors
            ${starValue <= rating ? 'text-yellow-500' : 'text-gray-400'}`} onClick={() => handlerRating(starValue)}>
              &#9733;
            </span>
        )
      })}
    </div>
  )
}

export default Rating
