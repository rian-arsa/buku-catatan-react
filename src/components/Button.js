import React from 'react'

function ArsipButton({id, clickAction, titleButton, className}) {
    return <button className={className} onClick={() => clickAction(id)}>{titleButton}</button>
}

export default ArsipButton