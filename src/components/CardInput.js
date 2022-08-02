import React from 'react'

class CardInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            longText: 50
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onTitleChangeHandler(e) {
        this.setState(()=> {
            return {
                longText: 50 - e.target.value.length,
                title: e.target.value,
            }
        })
    }

    onBodyChangeHandler(e) {
        this.setState(()=> {
            return {
                body: e.target.value
            }
        })
    }

    onSubmitHandler(e){
        e.preventDefault()
        this.props.addCatatan(this.state)
        this.setState({title: '', body: '', longText: 50})
    }


    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitHandler}>
                <h2 className='note-input__title'>Buat Catatan</h2>
                <p className='note-input__title__char-limit'>Sisa karakter : {this.state.longText}</p>
                <input placeholder='Masukkan Judul Catatan' value={this.state.title} onChange={this.onTitleChangeHandler} maxLength={50}></input>
                <textarea placeholder='Masukkan Isi Catatan' rows={10} value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
                <button>Buat</button>
            </form>
        );
    }
    
}

export default CardInput