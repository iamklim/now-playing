import React from 'react';
import './Preloader.sass';

class Preloader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="loader">
                <div className="loader__spinner">
                    <div className="loader__spinner-square"  />
                </div>
            </div>
        );
    }
}

export default Preloader;
