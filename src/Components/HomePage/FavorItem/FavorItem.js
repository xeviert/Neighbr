import React, { Component } from 'react';
import './FavorItem.css'

export default class FavorItem extends Component {
    render() {
        const { title, payment, description } = this.props
        return (
            <div className='favor-item'>
                <div className='favor-item-initials'>
                    XT
                </div>

                <div id="status">
                    <h3 id='favor-title'>Favor Title</h3>
                    <div>
                        Posted 6 hours ago
                    </div>
                    <div>
                        Payment: $$
                    </div>
                    <div>
                        {description}
                    </div>
                    <button>View</button>
                </div>
            </div>
        )
    }
}
