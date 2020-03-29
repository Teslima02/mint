import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardContent,
} from '@material-ui/core';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { Line, Circle } from 'rc-progress';

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

const colorMap = ['#85D262', '#e6db74'];
function getColor(index) {
  return colorMap[(index + colorMap.length) % colorMap.length];
}

const data = [1,2,3,4,5,6,10, 5, 3, 5, 6,3, 7, 20, 8, 15, 4, 2, 3,4,5,6,10, 5, 3, 12, 14, 50, 45, 30, 20, 14, 45, 60, 14, 50, 45, 30, 20, 14, 80,90,85,94,95, 92,93,100];
const Widget2 = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    percent: 100,
    colorIndex: 0,
  });
  const color = getColor(values.colorIndex);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <div className={classes.chart1}>
            {/* <div className={classes.dateFormat} /> */}
            {/* <div className={classes.dateFormat} /> */}
            <Card className={classes.card}>
              <CardContent>
                <xmp>
                  <Sparklines data={data} limit={20}>
                      <SparklinesLine color="#1c8cdc" />
                      <SparklinesSpots />
                  </Sparklines>
                </xmp>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.chart1}>
            <Card className={classes.card}>
              <CardContent>
                <Typography color="textSecondary">
                  <b>Orders</b>
                </Typography>
                <Line
                  percent={[80, 20]}
                  strokeWidth="2"
                  trailWidth="2"
                  strokeColor={[color, getColor(values.colorIndex + 1), getColor(values.colorIndex + 2)]}
                />
                <Typography variant="body2" component="p">
                  Pending Orders: <span style={{ color: '#e6db74'}}>20</span>
                </Typography>
                <Typography variant="body2" component="p">
                  Reconciled Orders: <span style={{ color: '#85D262'}}>80</span>
                </Typography>
                <Typography variant="body2" component="p">
                  Total Orders: <span style={{ color: 'blue'}}>100</span>
                </Typography>
              </CardContent>
            </Card>
            <div className={classes.verticalDivider} />
            {/* <Divider /> */}
            <Card className={classes.card}>
              <CardContent>
                <Typography color="textSecondary">
                  <b>Payments</b>
                </Typography>
                <Line
                  percent={[80, 20]}
                  strokeWidth="2"
                  trailWidth="2"
                  strokeColor={[color, getColor(values.colorIndex + 1), getColor(values.colorIndex + 2)]}
                />
                <Typography variant="body2" component="p">
                  Pending Orders: <span style={{ color: '#e6db74'}}>20</span>
                </Typography>
                <Typography variant="body2" component="p">
                  Reconciled Orders: <span style={{ color: '#85D262'}}>80</span>
                </Typography>
                <Typography variant="body2" component="p">
                  Total Orders: <span style={{ color: 'blue'}}>100</span>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Widget2;
