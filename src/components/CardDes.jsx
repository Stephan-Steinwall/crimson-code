import React from 'react'

const CardDes = (props) => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {props.heading}
            </h2>
            <div className="flex gap-8 mb-4">
                <span className="text-4xl font-bold text-custom-red ">{props.val1}</span>
                <span className="text-4xl font-bold ">{props.val2}</span>
            </div>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {props.desc}
            </p>
        </div>
    )
}

export default CardDes