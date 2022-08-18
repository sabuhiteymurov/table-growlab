import DenseTable from './DenseTable';
// @ts-ignore;
import uuid from 'react-uuid';
import axios from 'axios';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <section className='section-table'>
      <h2 className='section-table_title'>Table</h2>
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
