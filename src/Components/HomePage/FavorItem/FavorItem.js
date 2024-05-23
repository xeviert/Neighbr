import React from 'react';
import Moment from 'moment';

function FavorItem(props) {
  const first = props.first_name.charAt(0);
  const last = props.last_name.charAt(0);

  Moment.locale('en');
  let dt = props.posted;

  return (
    <div>
      <div>
        {first}
        {last}
      </div>
      <div>
        <h3>{props.title}</h3>

        <div>payment: {props.payment}</div>
        <div>{props.description}</div>
        <div>
          posted: {Moment(dt).local().fromNow()}
        </div>
      </div>
    </div>
  );
}

export default FavorItem;
