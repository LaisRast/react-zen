'use client';
import {
  Form,
  FormField,
  FormResetButton,
  FormSubmitButton,
  TextField,
  PasswordField,
  Row,
  Checkbox,
} from '@/components';

const defaultValues = { username: '', password: '', remember_password: false };

export function FormExample() {
  const handleSubmit = (values: any) => {
    console.log({ values });
  };

  return (
    <Form defaultValues={defaultValues} onSubmit={handleSubmit}>
      <FormField label="Username" name="username" rules={{ required: 'Username is required' }}>
        <TextField autoComplete="off" />
      </FormField>
      <FormField label="Password" name="password" rules={{ required: 'Password is required' }}>
        <PasswordField autoComplete="off" />
      </FormField>
      <FormField name="remember_password">
        <Checkbox>Remember me</Checkbox>
      </FormField>
      <Row gap="3" alignItems="center" justifyContent="flex-end">
        <FormResetButton>Reset</FormResetButton>
        <FormSubmitButton variant="primary">Submit</FormSubmitButton>
      </Row>
    </Form>
  );
}
