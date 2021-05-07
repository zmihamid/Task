import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ItemTask from '../components/ItemTask'
import AddIcon from '@material-ui/icons/Add'
import ModalEditTask from '../components/ModalEditTask'
import ModalDelete from '../components/ModalDelete'

export default function ListTasks({ classes, show, handleShowModalDone,submitEdit, tasks,taskEdit, 
    showModalEdit, closeModalEdit, modalEdit, modalDelete, showDelete, closeDelete, actionDelete }) {
    return (
        <div className={classes.listTask}>
            <Grid alignItems="center" container>
                <Grid item xs>
                    <Button variant="contained" color="primary">
                        View Demo Tasks
                    </Button>
                </Grid>

                <Grid item xs>
                    <h1>
                        Hello World
                    </h1>
                </Grid>

            </Grid>

            {
                tasks && tasks.map((item) => {
                    if (!item.done)
                        return (
                            <ItemTask showDelete={showDelete}  taskEdit={taskEdit} modalEdit={modalEdit} showEdit={showModalEdit} closeEdit={closeModalEdit} item={item} key={item.id} classes={classes} show={show} handleShowModalDone={handleShowModalDone} />
                        )
                    else return null
                })
            }

            <div onClick={show} className={classes.addNewTask}>
                <AddIcon />
            </div>

            <ModalEditTask submitEdit={submitEdit} taskEdit={taskEdit} modalEdit={modalEdit} classes={classes} close={closeModalEdit} />

            <ModalDelete action={actionDelete} taskEdit={taskEdit} close={closeDelete} modalDelete={modalDelete} classes={classes} />
        </div>
    )
}
