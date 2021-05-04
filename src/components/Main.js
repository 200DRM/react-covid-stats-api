import $ from 'jquery';
import axios from 'axios';
import { 
  useEffect,
  useState 
} from 'react';

const Main = () => {

  const [covidData, setCovidData] = useState([]);
  const tableData = covidData.map((obj) => (
    <tr>
      <td>{obj.Country}</td>
      <td>{obj.TotalConfirmed}</td>
      <td>{obj.TotalConfirmed - obj.TotalRecovered}</td>
      <td>{obj.TotalRecovered}</td>
      <td>{obj.TotalDeaths}</td>
    </tr>
  ));

  useEffect(() => {
    axios.get('https://api.covid19api.com/summary')
    .then(res => {
      setCovidData(res.data.Countries);
    })
    .catch(err => console.log(err));

    $(() => {
      $('#myTable').DataTable();
    });
  }, []);

  return (
    <div>
      <h1>React - Covid Tracker</h1>
      <div className='row justify-content-center w-100'>
        <div className='col-md-8'>
          <table 
            id='myTable'
            className='table'
          >
            <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              {tableData}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Main;
