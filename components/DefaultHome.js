import Button from '@material-ui/core/Button'

export default function DefaultHome({ classes, show }) {
    return (
        <div className={classes.home}>
            <h1>Hello World</h1>

            <div className={classes.btn}>
                <Button onClick={show} variant="contained" color="primary">
                    {"Create Your First Task ;)"}
                </Button>
            </div>
        </div>
    )
}
