import React from 'react'

function Button() {
    return (
        <>
            <button
                
                className={`
        flex items-center gap-2 px-5 py-2 rounded-md font-medium transition-all duration-200
        ${outline
                        ? "border border-white text-white hover:bg-white hover:text-black"
                        : "bg-white text-black hover:bg-gray-200"}
        ${className}
      `}
            >
                {icon && <span>{icon}</span>}
                {text}
            </button>
        </>
    )
}

export default Button