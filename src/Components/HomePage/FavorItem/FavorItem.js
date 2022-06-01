import React from 'react';
import Moment from 'moment';

import './FavorItem.css';

function FavorItem(props) {
  const first = props.first_name.charAt(0);
  const last = props.last_name.charAt(0);

  Moment.locale('en');
  let dt = props.posted;

  return (
    <div className='favor-item'>
      <div className='favor-item-initials'>
        {first}
        {last}
      </div>
      <div id='status'>
        <h3 id='favor-title'>{props.title}</h3>

        <div className='payment-info'>payment: {props.payment}</div>
        <div>{props.description}</div>
        <div className='time-posted'>
          posted: {Moment(dt).local().fromNow()}
        </div>
      </div>
    </div>
  );
}

export default FavorItem;
