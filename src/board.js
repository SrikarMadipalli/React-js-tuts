import React, { Component } from 'react';
import Note from './note';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes : [
                {
                    id:0,
                    note : "Call Lisa"
                },
                {
                    id:1,
                    note : "Called Lisa"
                },
                {
                    id:2,
                    note : "Email Lisa"
                },
                {
                    id:3,
                    note : "Emailed Lisa"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
    }
    update(newText, i){
        console.log('updating item at index', i, newText)
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !==i) ? note : {note, note: newText}
            )
        }))

    }
    eachNote(note , i){
            return(
                <Note key = {i}
                    index = {i}
                    onChange = {this.update}>
                    {note.note}
                </Note>
            )
    }
    render(){
        return(
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}
export default Board;
