import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function ProfileTable() {

  return (
      <>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table" className="border-2 px-5 border-b border-green-500 hover:border-green-400">
        <TableHead>
          <TableRow>
            <TableCell>Profile Data</TableCell>
            <TableCell align="right"><datalist></datalist></TableCell>
       </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Joining Date : </TableCell>
                <TableCell>22/03/1212 </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>EmployeeId  : </TableCell>
                <TableCell>1212 </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Qualification : </TableCell>
                <TableCell>Mtech </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Allowed Classes : </TableCell>
                <TableCell> Btech </TableCell>
            </TableRow>  <TableRow>
                <TableCell>Experience : </TableCell>
                <TableCell>03 </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Email : </TableCell>
                <TableCell> samulel@gmail.cpm </TableCell>
            </TableRow>  <TableRow>
                <TableCell>Medical History : </TableCell>
                <TableCell> - </TableCell>
            </TableRow>
           
        </TableBody>
     </Table>

    </TableContainer>
    
    <TableContainer component={Paper} className="border-2 px-5 border-b border-green-500 hover:border-green-400">
      <Table  aria-label="">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right"><datalist></datalist></TableCell>
       </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Current Address : </TableCell>
                <TableCell>Marg sira , lucknow ,India </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Permanent Address  : </TableCell>
                <TableCell>Lucknow,India </TableCell>
            </TableRow> 
        </TableBody>
     </Table>

    </TableContainer>
    
    <TableContainer component={Paper} className="border-2 px-5 border-b border-green-500 hover:border-green-400">
      <Table  aria-label="Personal Details">
        <TableHead>
          <TableRow>
            <TableCell>Personal Details</TableCell>
            <TableCell align="right"><datalist></datalist></TableCell>
       </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Blood Group : </TableCell>
                <TableCell>A+ </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Date of Birth  : </TableCell>
                <TableCell>26/03/1998 </TableCell>
            </TableRow> 
            <TableRow>
                <TableCell>N.I.N  : </TableCell>
                <TableCell>Lawyer </TableCell>
            </TableRow> 
            <TableRow>
                <TableCell>Bank Account Number  : </TableCell>
                <TableCell>9848542254598 </TableCell>
            </TableRow> 

        </TableBody>
     </Table>

    </TableContainer>
    
     </>
  );
}
