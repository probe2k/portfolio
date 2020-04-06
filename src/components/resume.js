import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div>
                <iframe
                    title="Yash Singh/probe2k | Resume"
                    src={require('../asset/resume.pdf')}
                    className="resume-user"                
                />
            </div>
        );
    }
}

export default Resume;