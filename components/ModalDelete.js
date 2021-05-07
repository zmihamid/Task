import React from 'react'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

export default function ModalDelete({modalDelete , classes , close, taskEdit, action}) {

    console.log(modalDelete);
    return (
        <React.Fragment>
            <Modal
                className={classes.modal}
                open={modalDelete}
                onClose={close}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={{textAlign: "center"}} className={classes.boxModal}>
                    <h4>{taskEdit.title}</h4>

                    <p>
                       {taskEdit.description} 
                    </p>

                    <div className={classes.actionBar}>
                        <Button onClick={() => action("edit")} variant="contained" color="default">Edit Task</Button>
                        <Button onClick={() => action("done")} variant="contained" color="primary">Done Task</Button>
                        <Button onClick={() => action("delete")} variant="contained" color="secondary">Delete Task</Button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}
