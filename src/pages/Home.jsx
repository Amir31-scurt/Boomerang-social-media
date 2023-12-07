import React from 'react';
// eslint-disable-next-line
// import '../Barry.css';
import { Cards } from '../components/Cards';
import { TextPublication } from '../components/TextPublication';
import { PublishTable } from '../components/UtilsData';

const Home = () => {
  return (
    <div className="py-5">
      {/* carte numero 1 */}

      <div className="">
        <Cards />
      </div>

      {/* carte numero 2 */}
      <div className="">
        <TextPublication key={PublishTable.id} />
      </div>
    </div>
  );
};
export default Home;
