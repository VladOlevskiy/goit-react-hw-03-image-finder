import React, { Component } from 'react';
import { Formik } from 'formik';
import { Header, Button, Form, Label, Field } from './Searchbar-styled';

const initialValues = {
  searchQuery: '',
};

export class Searchbar extends Component {
  state = {
    buttonStatus: false,
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Header>
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
          <Form>
            <Button type="submit" disabled={this.state.buttonStatus}>
              <Label>Search</Label>
            </Button>
            <Field
              type="text"
              name="searchQuery"
              placeholder="Search images and photos"
            ></Field>
          </Form>
        </Formik>
      </Header>
    );
  }
}
