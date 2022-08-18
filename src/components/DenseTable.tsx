import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModalComponent from './ModalComponent';
import Button from '@mui/material/Button';
//@ts-ignore
import uuid from 'react-uuid';

const DenseTable: React.FC<{ rows: any }> = ({ rows }) => {
  const initialSkillState = {
    language_skills: [
      {
        language: '',
        languageLevel: '',
      },
    ],
    additional_questions: [
      {
        company: '',
        question_2: '',
        question_3: '',
        question_4: '',
      },
    ],
    education_background: [
      {
        field: '',
        degree: '',
        entrance: '',
        graduation: '',
      },
    ],
  };
  const [additionalSkillRow, setAdditionalSkillRow] =
    useState(initialSkillState);

  const handleClick = (id: number) => {
    const row: any = rows.find((rowObj: any) => {
      return rowObj.id === id;
    });
    setAdditionalSkillRow(row);
  };

  return (
    <TableContainer component={Paper} className='main-table'>
      <Table sx={{ minWidth: 600 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Fullname</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Birthday</TableCell>
            <TableCell align='right'>Phone number</TableCell>
            <TableCell align='right'>Soft&nbsp;skills</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            (row: any) =>
              row.fullname &&
              row.email && (
                <TableRow
                  key={uuid()}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.fullname}
                  </TableCell>
                  <TableCell align='right'>{row.email}</TableCell>
                  <TableCell align='right'>{row.birthday}</TableCell>
                  <TableCell align='right'>{row.phonenumber}</TableCell>
                  <TableCell align='right'>{row.soft_skills}</TableCell>
                  <Button
                    variant='outlined'
                    size='small'
                    onClick={() => handleClick(row.id)}
                  >
                    Details
                  </Button>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
      {additionalSkillRow.language_skills[0].language && (
        <ModalComponent
          additionalSkillRow={additionalSkillRow}
          setAdditionalSkillRow={setAdditionalSkillRow}
          initialSkillState={initialSkillState}
        />
      )}
    </TableContainer>
  );
};

export default DenseTable;
