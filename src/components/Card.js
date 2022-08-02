import React from 'react'
import Button from './Button'

class Card extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: props.title,
            date: props.date,
            textContent: props.textContent,
            onArsip: props.onArsip,
            onDelete: props.onDelete,
            id: props.id,
            titleButton : props.titleButton
        }
    }

    render() {
        return (
             <div className='note-item'>
               <div className='note-item__content'>
                    <h3 className='note-item__title'>{this.state.title}</h3>
                    <p className='note-item__date'>{this.state.date}</p>
                    <p className='note-item__body'>{this.state.textContent}</p>
               </div>
                <div className='note-item__action'>
                    <Button clickAction={this.state.onDelete} id={this.state.id} titleButton="Delete" className="note-item__delete-button"/>
                    <Button clickAction={this.state.onArsip} id={this.state.id} titleButton={this.state.titleButton} className="note-item__archive-button"/>
                </div>
             </div>
        );
    }
    
}

export default Card