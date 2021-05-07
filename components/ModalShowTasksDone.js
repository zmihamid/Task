import React from 'react'
import Modal from '@material-ui/core/Modal'
import Grid from '@material-ui/core/Grid'

export default function ModalShowTasksDone({ showModal, handleClose, classes, tasks }) {
    return (
        <Modal
            className={classes.modal}
            open={showModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.boxModal}>
                <h2>Done Tasks</h2>

                {
                    tasks != "" ? tasks.map((item) => {
                        if (item.done) {
                            return (
                                <Grid key={item.id} className={classes.task} container>
                                    <Grid item xs={6}>
                                        {item.title}
                                    </Grid>
                                    <Grid xs={6} justify="flex-end" item>
                                        <div className={classes.stsTask}>
                                            <div>{item.priority}</div>
                                            <span className={item.priority == "high" ? classes.high : item.priority == "medium" ? classes.medium : classes.low}></span>
                                        </div>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <span className={classes.taskDesc}>
                                            {item.description}
                                        </span>
                                    </Grid>

                                </Grid>
                            )
                        } else return null
                    })
                    : null
                }

            </div>
        </Modal>
    )
}
