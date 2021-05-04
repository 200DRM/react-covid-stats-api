import axios from 'axios';
import { useEffect } from 'react';

const Main = () => {

  useEffect(() => {
    axios.get('https://api.covid19api.com/summary')
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>React - Covid Tracker</h1>
      <div className='row justify-content-center w-100'>
        <div className='col-md-8'>
          <table className='table'>
            <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Main;
