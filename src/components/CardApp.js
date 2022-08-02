import React from 'react'
import {getInitialData, showFormattedDate} from '../utils/index'
import CardList from './CardList'
import CardInput from "./CardInput";

class CardApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: getInitialData()
        }

        this.onArsipHandler = this.onArsipHandler.bind(this)
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this)
    }

    onArsipHandler(id) {
        const data = this.state.data
        const index = this.findIndexElement(id)

        data[index].archived = !data[index].archived
        this.setState({data})
    }
    
    findIndexElement(id) {
        return this.state.data.findIndex((element)=> element.id === id)
    }
    
    onDeleteHandler(id) {
        const data = this.state.data
        const index = this.findIndexElement(id)

        data.splice(index, 1)
        this.setState({data})
    }

    onAddCatatanHandler({title, body}){
        this.setState((prevState) => {
            return {
                data : [
                    ...prevState.data,
                    {
                        id: +new Date(),
                        title: title,
                        body: body,
                        archived: false,
                        createdAt: new Date()
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div >
                <CardInput addCatatan={this.onAddCatatanHandler}/>
                <CardList title={"Catatan Aktif"} data={this.state.data} showFormattedDate={showFormattedDate} onArsip={this.onArsipHandler} onDelete={this.onDeleteHandler} archived={false} titleButton="Arsipkan"/>
                <CardList title={"Arsipkan"} data={this.state.data} showFormattedDate={showFormattedDate} onArsip={this.onArsipHandler} onDelete={this.onDeleteHandler} archived={true} titleButton="Aktifkan"/>
            </div>
        );
    }
}

export default CardApp