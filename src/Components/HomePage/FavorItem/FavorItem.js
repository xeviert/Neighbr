import React, { Component }  from 'react';
import Context from '../../../Context'
import Moment from 'moment'

import './FavorItem.css'

class FavorItem extends Component {

   static defaultProps = {

   };

   static contextType = Context;



   render() {

      const first = this.props.first_name.charAt(0)
      const last = this.props.last_name.charAt(0)

      Moment.locale('en')
      let dt = this.props.posted

         return (
            <div className='favor-item' >
                  <div className='favor-item-initials'>
                  {first}{last}
                  </div>
                  <div id="status">
                     <h3 id='favor-title'>{this.props.title}</h3>

                     <div className='payment-info'>
                        payment: {this.props.payment}
                     </div>
                     <div>
                        {this.props.description}
                     </div>
                     <div className='time-posted'>
                        posted: {Moment(dt).local().fromNow()}
                     </div>
                  </div>
               </div>
         )
   }
}

export default FavorItem;