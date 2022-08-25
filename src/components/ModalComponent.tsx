import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//@ts-ignore
import uuid from 'react-uuid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY: 'scroll',
  height: 650,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

//@ts-ignore
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ModalComponent: React.FC<{
  additionalSkillRow: any;
  setAdditionalSkillRow: any;
  initialSkillState: any;
}> = ({ additionalSkillRow, setAdditionalSkillRow, initialSkillState }) => {
  const handleClose = () => setAdditionalSkillRow(initialSkillState);
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className='modal'
      >
        <Fade in={true}>
          <Box sx={style}>
            <TableContainer component={Paper}>
              <h2>Language skills</h2>
              <Table sx={{ minWidth: 600 }} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Language</StyledTableCell>
                    <StyledTableCell align='right'>
                      Language level
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {additionalSkillRow.language_skills.map((lang: any) => {
                    return (
                      <StyledTableRow key={uuid()}>
                        <StyledTableCell component='th' scope='row'>
                          {lang.language}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {lang.languageLevel}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <h2>Additional questions</h2>
              <Table sx={{ minWidth: 600 }} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Company</StyledTableCell>
                    <StyledTableCell align='right'>Question 2</StyledTableCell>
                    <StyledTableCell align='right'>Question 3</StyledTableCell>
                    <StyledTableCell align='right'>Question 4</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {additionalSkillRow.additional_questions.map(
                    (questions: any) => {
                      return (
                        <StyledTableRow key={uuid()}>
                          <StyledTableCell component='th' scope='row'>
                            {questions.company}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {questions.question_2}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {questions.question_3}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {questions.question_4}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
              <h2>Education background</h2>
              <Table sx={{ minWidth: 600 }} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Field</StyledTableCell>
                    <StyledTableCell align='right'>Degree</StyledTableCell>
                    <StyledTableCell align='right'>Entrance</StyledTableCell>
                    <StyledTableCell align='right'>Graduation</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {additionalSkillRow.education_background.map(
                    (education: any) => {
                      return (
                        <StyledTableRow key={uuid()}>
                          <StyledTableCell component='th' scope='row'>
                            {education.field}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {education.degree}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {education.entrance}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {education.graduation}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
              <h2>Work and volunteering</h2>
              <Table sx={{ minWidth: 600 }} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell align='right'>Company</StyledTableCell>
                    <StyledTableCell align='right'>Duration</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {additionalSkillRow.work_and_volunteering.map((work: any) => {
                    return (
                      <StyledTableRow key={uuid()}>
                        <StyledTableCell component='th' scope='row'>
                          {work.title}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {work.company}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {work.duration}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalComponent;
