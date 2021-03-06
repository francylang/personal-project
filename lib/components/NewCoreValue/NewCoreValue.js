import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';

class NewCoreValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coreValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    let value = event.target.value;

    this.setState({
      [type]: value
    });
  }

  handleSubmit(event) {
    const { addCoreValue, history } = this.props;
    event.preventDefault();
    addCoreValue(this.state.coreValue);
    this.setState({
      coreValue: ''
    });
    history.push('/');
  }

  render() {
    const { coreValue } = this.state;
    return (
      <Wrapper history={ this.props.history }>
        <div className='new-value'>
          <h2 className='create-new-value'>Add New Core Value</h2>
          <form
            className='add-new-value-form'>
            <input
              type='text'
              placeholder='Core Value'
              className='new-core-value-input'
              value={coreValue}
              onChange={ (event) => this.handleChange(event, 'coreValue')}/>
            <input
              disabled={ !coreValue.length }
              className='form-button-value'
              type='submit'
              onClick={this.handleSubmit}/>
          </form>
        </div>
      </Wrapper>
    );
  }
}

NewCoreValue.propTypes = {
  addCoreValue: PropTypes.func,
  history: PropTypes.object,
  isAuthenticated: PropTypes.func
};


export default NewCoreValue;
