import React from 'react';
import { connect } from 'react-redux'

const GradsList = ({ grads }) => {
    return (
        <div>
            <h1>Grads List:</h1>
            {grads.map(grad => 
                <ul key={grad.id}>
                    <li >
                        {grad.name} - {grad.degree} - {grad.grad_date} - {grad.school}
                    </li>
                </ul>
        )}
        </div>
    );
};

const mapStateToProps = state => {
    return { grads: state.grads }
}

export default connect(mapStateToProps)(GradsList);