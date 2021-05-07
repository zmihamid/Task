import React, { useEffect } from 'react'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useForm, Controller } from 'react-hook-form'

export default function ModalAddTask({ classes, close, submitEdit, modalEdit, taskEdit }) {

    const { handleSubmit, formState: { errors }, setValue, control } = useForm()

    useEffect(() => {

        if (taskEdit.title) {
            setValue("title", taskEdit.title)
            setValue("description", taskEdit.description)
            setValue("gift", taskEdit.gift)
            setValue("priority", taskEdit.priority)
        }

    }, [taskEdit])
    return (
        <React.Fragment>
            <Modal
                className={classes.modal}
                open={modalEdit}
                onClose={close}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.boxModal}>


                    <Controller
                        control={control}
                        rules={{ required: "Please Enter Title Task" }}
                        name="title"
                        defaultValue={taskEdit.title}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <TextField
                                value={value}
                                onChange={onChange}
                                className={classes.inputModal}
                                id="outlined-helperText"
                                label="Task Title"
                                variant="outlined"
                            />

                        )}
                    />
                    {errors.title && <span className={classes.error}>{errors.title.message}</span>}

                    <Controller
                        control={control}
                        rules={{ required: "Please Enter Description Task" }}
                        name="description"
                        defaultValue={taskEdit.description}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <TextField
                                value={value}
                                onChange={onChange}
                                className={classes.inputModal}
                                id="outlined-helperText"
                                label="Task Description"
                                variant="outlined"
                                multiline
                                rows={4}
                            />

                        )}
                    />



                    {errors.description && <span className={classes.error}>{errors.description.message}</span>}

                    <Controller
                        control={control}
                        rules={{ required: "Please Enter Gift..." }}
                        name="gift"
                        defaultValue={taskEdit.gift}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <TextField
                                value={value}
                                onChange={onChange}
                                className={classes.inputModal}
                                id="outlined-helperText"
                                label="Gift and KPI for this task ;)"
                                variant="outlined"
                            />

                        )}
                    />


                    {errors.gift && <span className={classes.error}>{errors.gift.message}</span>}

                    <Controller
                        control={control}
                        name="priority"
                        defaultValue={taskEdit.priority}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <RadioGroup value={value} onChange={onChange} className={classes.radioline}
                                aria-label="gender" name="gender1" defaultValue="low" >
                                <FormControlLabel value="low" control={<Radio />} label="Low" />
                                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                                <FormControlLabel value="high" control={<Radio />} label="High" />
                            </RadioGroup>


                        )}
                    />

                    <Grid
                        className={classes.btnAddNT}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Button onClick={handleSubmit(submitEdit)} variant="contained" color="primary">
                            Edit To Tasks
                        </Button>
                    </Grid>


                </div>

            </Modal>
        </React.Fragment>
    )
}
