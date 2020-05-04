import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';

const initialValues = {
  fullName: '',
  initialInvestment: undefined,
  investmentRist: [],
  commentAboutInvestmentRist: '',
  dependents: -1,
  acceptedTermsAndConditions: false,
};

export default function FormDemo() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4">New Account</Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={() => console.log('formik!')}
          >
            {({ values }) => (
              <Form>
                <button type="submit">Submit</button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
