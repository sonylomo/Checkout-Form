import React from 'react'

function ImagePreview(props) {
    return (
        <div className="Preview">
            <div className="WorkspaceName">Coworking Space, South Korea</div>
            <div className="WorkspacePrice">
                <div className="Price">{props.price} USD</div>
                <div className="Duration">/ 1 day</div>
            </div>
            <div className="WorkspacePeople">
                Entire Office for {props.people} people
            </div>
        </div>
    )
}

export default ImagePreview
