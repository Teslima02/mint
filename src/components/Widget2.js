import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardContent,
} from '@material-ui/core';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { Line } from 'rc-progress';

const useStyles = makeStyles({
  card: {
    Width: '50px',
  },
  chart1: {
    marginTop: '20px',
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
