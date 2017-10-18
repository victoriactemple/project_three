import React, { Component } from 'react';
import styled from 'styled-components';

const PieSlice = styled.div`
display: block;
 text-align: center;
padding-top: 50px;
padding-left: 60px;
padding-right: 40px;
img {max-width: 600px;
    border-radius: 3px;
}
`

class About extends Component {
    render() {
        return (
            <div>
                <PieSlice>
                    <span>this is what we do</span>
                <img src="https://i.imgur.com/hQNst5k.jpg" />

                </PieSlice>
                
            </div>
        );
    }
}

export default About;