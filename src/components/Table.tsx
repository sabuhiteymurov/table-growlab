import { useEffect, useState } from 'react';
import axios from 'axios';
import DenseTable from './DenseTable';
import Button from '@mui/material/Button';
// @ts-ignore;
import uuid from 'react-uuid';

const Table: React.FC = () => {
  const url =
    'http://172.16.10.132:3574/nc/growlab_0gmv/api/v1/career_form_request';
  const authToken = {
    headers: {
      'xc-auth':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI',
    },
  };
  const [tableData, setTableData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getTableData = () => {
    setIsLoading(true);
    axios
      .get(url, authToken)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => console.error(err));
    setIsLoading(false);
  };

  const handleUpdate = async () => {
    //@ts-ignore

    try {
      await axios.post(
        'http://localhost:3037/updateFormToNotion',
        { tableData },
        {
          headers: {
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
          },
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <section className='section-table'>
      <div className='section-table_upper-container'>
        <h2 className='section-table_title'>Table</h2>
        <Button
          variant='contained'
          size='small'
          className='section-table_update'
          onClick={handleUpdate}
        >
          Update
        </Button>
      </div>
      {isLoading && <h3 className='loading-title'>Loading...</h3>}
      {tableData && (
        <div className='section-table'>
          <DenseTable rows={tableData} key={uuid()} />
        </div>
      )}
    </section>
  );
};

export default Table;
