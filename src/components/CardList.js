import React from 'react'
import Card from './Card'

function CardList({data, onArsip, onDelete, showFormattedDate, archived, titleButton, title}) {
    const datas = data.filter((item) => item.archived === archived)
    return (
        <>
            <h3 className='note-title'>{title}</h3>
                {
                     datas.length === 0
                     ? <h5 className='notes-list notes-list__empty-message'>Catatan Kosong</h5>
                     : <div className='notes-list'>
                     {
                         datas
                             .map((item)=> (
                                 <Card key={item.id} id={item.id} title={item.title} date={showFormattedDate(item.createdAt)} textContent={item.body} onArsip={onArsip} onDelete={onDelete} titleButton={titleButton}/>
                             ))
                     }
                     </div>
                }
                
        </>
    )
}

export default CardList