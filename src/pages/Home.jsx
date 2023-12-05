import React from 'react';
import { Cards } from '../components/Cards';
import { UnModal } from '../components/UnModal';
import { TextPublication } from '../components/TextPublication';
import { PublishTable } from '../components/UtilsData';

const Home = () => {
  return (
    <div className="bg-gray-300 py-5">
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
