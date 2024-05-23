import React, { useContext } from 'react';
import AppContext from '../../../Context';
import FavorItem from '../FavorItem/FavorItem';

function ListOfFavors() {
  const context = useContext(AppContext);
  const { favors } = context;

  return (
    <section className='favors-list'>
      {favors.map((favor) => (
        <FavorItem
          title={favor.title}
          payment={favor.payment}
          description={favor.description}
          posted={favor.posted}
          first_name={favor.first_name}
          last_name={favor.last_name}
          key={favor.favor_id}
        />
      ))}
    </section>
  );
}

export default ListOfFavors;
