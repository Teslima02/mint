import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardContent,
} from '@material-ui/core';

import Vector1 from '../assets/images/Vector1.svg';

const useStyles = makeStyles({
  card: {
    Width: '50px',
  },
  pos: {
    marginBottom: 12,
  },
  floatVector: {
    float: 'right',
    marginTop: '-40px',
  },
});

const Widget1 = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3}>
                <Card>
                    <CardContent>
                        <Typography className={classes.pos} color="textSecondary">
                            Daily Transaction Volume
                        </Typography>
                        <Typography variant="body2" component="p">
                            2,342
                        </Typography>
                        <img alt="" src={Vector1} className={classes.floatVector} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.card}>
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
                        Daily Transaction Volume
                    </Typography>
                    <Typography variant="body2" component="p">
                        ₦4,000,000
                    </Typography>
                    <img alt="" src={Vector1} className={classes.floatVector} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.card}>
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
                        Daily Transaction Volume
                    </Typography>
                    <Typography variant="body2" component="p">
                        2,342
                    </Typography>
                    <img alt="" src={Vector1} className={classes.floatVector} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.card}>
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
                        Daily Transaction Volume
                    </Typography>
                    <Typography variant="body2" component="p">
                        ₦4,000,000
                    </Typography>
                    <img alt="" src={Vector1} className={classes.floatVector} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default Widget1;
