import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <p className="ui error message">
          <span className="header">{error}</span>
        </p>
      )

    }
  }


  renderInput = ({ input, label, id, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <label
        htmlFor={id}
        className={className}
      >
        {label}
        <input
          {...input}
          id={id}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </label>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }


  render() {
    return (
      <React.Fragment>
        <form
          className="ui form error streamsForm"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            label="Enter Title"
            id="title"
            component={this.renderInput}
          />
          <Field
            name="description"
            label="Enter Description"
            id="description"
            component={this.renderInput}
          />
          <div className="streamsFormSubmit">
            <button className="ui button primary">Submit</button>
            <Link to="/" className="ui button">Cancel</Link>
          </div>
          
        </form>
      </React.Fragment>
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm)



/*
  # <Field /> is a component provided by <redux-form.
  # A 'name' field is required.
  # It doesn't display any form elements.
  # This must be done using a method:

  1) Longhand:

  renderInput(formProps) {
    return (
      <input
        value={formProps.input.value}
        onChange={formProps.input.onChange}
      />

    )
  }


  2) Short(er)hand:

  renderInput(formProps) {
    return <input {...formProps.input} />
  }

  3) Shorthand:

  renderInput({ input }) {
    return <input {...input} />
  }

*/
