import React from 'react';
import { formatDistance, subDays } from 'date-fns';
import Moment from 'moment'

import './FavorItem.css'

const FavorItem = (props) => {



   
   //-------------------------------------
   Moment.locale('en')
   let dt = props.posted

   return (
      <div className='favor-item'>
            <div className='favor-item-initials'>
            {props.first_name}
            </div>
            <div id="status">
               <h3 id='favor-title'>{props.title}</h3>
               <div>
                  {Moment(dt).fromNow()}
               </div>
               <div>
                  Payment: {props.payment}
               </div>
               <div>
                  {props.description}
               </div>
            </div>
         </div>
   )
}




export default FavorItem;