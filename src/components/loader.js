import React from 'react';

const loader = () => {
    return (<div>
        <div class="ui icon message">
        <i class="notched circle loading icon"></i>
        <div class="content">
          <div class="header">
            Just one second
          </div>
          <p>We're fetching that content for you.</p>
        </div>
      </div>
    </div>
    )
}

export default loader