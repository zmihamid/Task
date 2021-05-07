import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default function ItemTask({ classes, handleShowModalDone, item, showEdit,showDelete }) {
    
    return (
        <Grid onClick={() => showDelete(item)} className={classes.task} container>
            <Grid item xs={6}>{item.title}</Grid>
            <Grid xs={6} justify="flex-end" item>
                <div className={classes.stsTask}>
                    <div>{item.priority}</div>
                    <span className={item.priority == "high" ?classes.high : item.priority == "medium" ? classes.medium : classes.low}></span>
                </div>
            </Grid>

            <Grid item xs={6}>
                <span className={classes.taskDesc}>
                    {item.description}
                    </span>
            </Grid>
            <Grid xs={6} justify="flex-end" item>
                <div className={classes.buttonsTask}>
                    <Button onClick={handleShowModalDone} variant="contained">Done Task</Button>
                    <Button onClick={(e) => showEdit(e ,item)} style={{ marginLeft: 10 }} variant="contained" color="primary">
                        Edit Task
                    </Button>
                </div>
            </Grid>

            
        </Grid>        
    )
}
