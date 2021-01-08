import React, { Component } from 'react';
import './FavorItem.css'

const FavorItem = ({ title, payment, description }) => {
        return (
            <div className='favor-item'>
                <div className='favor-item-initials'>
                    XT
                </div>

                <div id="status">
                    <h3 id='favor-title'>{title}</h3>
                    <div>
                        Posted 6 hours ago
                    </div>
                    <div>
                        Payment: {payment}
                    </div>
                    <div>
                        {description}
                    </div>
                    <button>View</button>
                </div>
            </div>
        )
}

export default FavorItem;