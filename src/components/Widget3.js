import React from 'react';
import { Typography, makeStyles, FormControlLabel, Icon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MUIDataTable from "mui-datatables";
import vw from '../assets/images/vw.svg';

const useStyles = makeStyles({
  image: {
    marginLeft: '20px',
  },
  reconciledButton: {
    color: '#27AE60',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    padding: '10px',
  },
  pendingButton: {
    color: '#EBC315',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    padding: '10px',
  },
  unreconciledButton: {
    color: '#7F8FA4',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    padding: '10px',
  },
});

const data = [
  {id: 1, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567890', time: '12:30', status: 'Reconciled'},
  {id: 2, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567891', time: '12:31', status: 'Pending'},
  {id: 3, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567892', time: '12:32', status: 'Reconciled'},
  {id: 4, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567893', time: '12:33', status: 'Reconciled'},
  {id: 5, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567894', time: '12:34', status: 'Pending'},
  {id: 6, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567895', time: '12:35', status: 'Un-reconciled'},
  {id: 7, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567896', time: '12:36', status: 'Reconciled'},
  {id: 8, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567897', time: '12:37', status: 'Un-reconciled'},
  {id: 9, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567898', time: '12:38', status: 'Pending'},
  {id: 10, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567890', time: '12:39', status: 'Reconciled'},
  {id: 11, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567390', time: '12:40', status: 'Reconciled'},
  {id: 12, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567290', time: '12:41', status: 'Pending'},
  {id: 13, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567190', time: '12:42', status: 'Reconciled'},
  {id: 14, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567390', time: '12:43', status: 'Un-reconciled'},
  {id: 15, itemType: 'Apple Mac Book 15* 250 SSD 12B', price: '$73430', transactionNo: '1234567290', time: '12:44', status: 'Reconciled'},
]

const Widget3 = () => {
  const classes = useStyles();

  const columns = [
    {
      name: 'itemType',
      label: 'Item Type',
      options: {
        filter: true,
        sort: false,
        customBodyRender: value => {
          return (
            <Typography>
              <img alt="" src={vw} width='40px' height='20px' className={classes.image} />{value}
            </Typography>
          );
        },
      },
    },
    {
      name: 'price',
      label: 'Price',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'transactionNo',
      label: 'Transaction No',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'time',
      label: 'Time',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'status',
      label: '',
      options: {
        filter: true,
        sort: false,
        customBodyRender: value => {
          if (value === 'Reconciled') {
            return (
              <Typography className={classes.reconciledButton}>
                <FiberManualRecordIcon />{value}
              </Typography>
            );
          }
          if (value === 'Pending') {
            return (
              <Typography className={classes.pendingButton}>
                <FiberManualRecordIcon />{value}
              </Typography>
            );
          }
          if (value === 'Un-reconciled') {
            return (
              <Typography className={classes.unreconciledButton}>
                <FiberManualRecordIcon />{value}
              </Typography>
            );
          }
        },
      },
    },
  ];

  const options = {
    filterType: 'checkbox',
    responsive: 'scrollMaxHeight',
    selectableRows: 'none',
  };

  return (
    <React.Fragment>
       <Typography variant="h5" component="p">
        Payments
      </Typography>
      <MUIDataTable
        title="Payments"
        data={data}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
}

export default Widget3;
