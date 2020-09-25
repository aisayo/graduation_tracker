import React from 'react';
import { connect } from 'react-redux'

const GradsList = ({ grads }) => {
    return (
        <div>
            {grads.map(grad => {
                <ul>
                    <li key={grad.id}>
                        {grad.name} - {grad.degree} - {grad.grad_date} - {grad.school}
                    </li>
                </ul>
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { grads: state.grads }
}

export default connect(mapStateToProps)(GradsList);