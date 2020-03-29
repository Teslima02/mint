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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  floatVector: {
    float: 'right',
    marginTop: '-40px',
  },
  chart1: {
    marginTop: '20px',
  },
  hrDivider: {
    border: '4px solid #F7F8FA',
    transform: 'rotate(-90deg)',
  },
  floatOrder: {
    float: 'right',
    marginTop: '140px',
  },
  verticalDivider: {
    border: '4px solid #F7F8FA',
  },
  dateFormat: {
    position: 'absolute',
    left: '324px',
    top: '221px',
  },
  monthFormat: {
    position: 'absolute',
    height: '31px',
    left: '701px',
    top: '218px',
  },
  leftArrow: {
    position: 'absolute',
    height: '19.38px',
    left: '902.43px',
    top: '218px',
  },
  rightArrow: {
    position: 'absolute',
    height: '19.38px',
    left: '926.15px',
    top: '218px',
  },
  tableHeader: {
    background: '#EAEEF0',
  },
  itemType: {
    marginLeft: '10px',
  },
  itemImage: {
    float: 'left',
    marginRight: '20px',
  },
  reconciledButton: {
    color: '#27AE60',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    marginRight: '20px',
  },
  pendingButton: {
    color: '#EBC315',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    marginRight: '20px',
  },
  unreconciledButton: {
    color: '#7F8FA4',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    marginRight: '20px',
  },
  dot: {
    marginRight: '2px',
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
