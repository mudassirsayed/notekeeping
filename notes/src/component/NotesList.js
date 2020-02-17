import React, { Component } from 'react'
import NotesItem from './NotesItem';
class NotesList extends Component {
    render() {
        const { items, clearAll, handleDelete, handleEdit } = this.props
        return (

            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    List of All Notes
                </h3>
                {items.map(item => {
                    return <NotesItem
                        key={item.id}
                        title={item.title}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}
                    />;
                })
                }

                <button
                    type="button"
                    className="btn btn-danger btn-block text-capitalize mt-5"
                    onClick={clearAll}
                >
                    Clear All
                </button>
            </ul>
        );
    }
}

export default NotesList