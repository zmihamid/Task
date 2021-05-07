import React, { useEffect } from 'react'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useForm } from 'react-hook-form'

export default function ModalAddTask({ classes, handleCloseModalDefault, modalAdd, btnAddNewTask }) {

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm()

    useEffect(() => {

        reset()
        register("priority")
        setValue("priority", "low")

    }, [])

    const onSubmit = (data) => {
        reset()
        btnAddNewTask(data)
    }
    const handleChange = (e) => {
        setValue("priority", e.target.value)
    }
    return (
        <React.Fragment>
            <Modal
                className={classes.modal}
                open={modalAdd}
                onClose={handleCloseModalDefault}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.boxModal}>
                    <TextField
                        {...register("title", { required: "Please Enter Title..." })}
                        className={classes.inputModal}
                        id="outlined-helperText"
                        label="Task Title"
                        variant="outlined"
                    />

                    {errors.title && <span className={classes.error}>{errors.title.message}</span>}

                    <TextField
                        {...register("description", { required: "Please Enter Description..." })}
                        className={classes.inputModal}
                        id="outlined-helperText"
                        label="Task Description"
                        variant="outlined"
                        multiline
                        rows={4}
                    />

                    {errors.description && <span className={classes.error}>{errors.description.message}</span>}

                    <TextField
                        {...register("gift", { required: "Please Enter Gift..." })}
                        className={classes.inputModal}
                        id="outlined-helperText"
                        label="Gift and KPI for this task ;)"
                        variant="outlined"
                    />

                    {errors.gift && <span className={classes.error}>{errors.gift.message}</span>}

                    <RadioGroup onChange={handleChange} className={classes.radioline}
                        aria-label="gender" name="gender1" defaultValue="low" >
                        <FormControlLabel value="low" control={<Radio />} label="Low" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="high" control={<Radio />} label="High" />
                    </RadioGroup>

                    <Grid
                        className={classes.btnAddNT}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
                            Add To Tasks
                        </Button>
                    </Grid>


                </div>

            </Modal>
        </React.Fragment>
    )
}
