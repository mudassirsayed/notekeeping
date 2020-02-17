import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

class NotesItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props
        return (
            <div className="list-container">
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6>{title}</h6>
                    <div className="notes-icon">
                        <span className="mx-2 text-success edit" onClick={handleEdit}>
                            <FontAwesomeIcon icon={faEdit} />
                        </span>
                        <span className="mx-2 text-danger delete" onClick={handleDelete}>
                            <FontAwesomeIcon icon={faTrash} />
                        </span>
                    </div>
                </li>
            </div>
        );
    }
}

export default NotesItem