import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
  ModalCol,
  ModalHeading,
  Flex,
  FormGroup,
  Form,
  Label,
  Input,
  ForgotPasswordContent,
  SubmitButton,
  ShowPassword,
  ErrorMessage,
} from './styled';
import Lang from '../../../../lang/en';
import { PAGE_LINKS } from '../../../routes/constants';
import { LoginData } from '../../../session/login/LoginData';
import useLoginForm from './useLoginForm';
import { Redirect } from 'react-router-dom';
import Loader from '../../../common/loadData/Loader';

interface Props {
  show: boolean;
  handleClose: (show: boolean) => void;
}

const LoginForm: React.FC<Props> = ({ show, handleClose }) => {
  const { register, handleSubmit, errors } = useForm<LoginData>();
  const { isLogged, loading, error, clearError, saveForm } = useLoginForm();

  if (show && isLogged) {
    return <Redirect to={PAGE_LINKS.visitorManagement} />;
  }

  return (
    <ModalCol>
      <Modal
        show={show}
        onHide={(): void => handleClose(false)}
        dialogClassName="login-modal"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <ModalHeading>{Lang.signinText}</ModalHeading>
          <Form onSubmit={handleSubmit(saveForm)}>
            <Flex>
              <FormGroup>
                <Label>{Lang.loginEmailContent}</Label>
                <Input
                  placeholder={Lang.loginEmailPlaceholder}
                  name="email"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: Lang.invalidEmailText,
                    },
                  })}
                  onChange={clearError}
                />
                {errors.email && (
                  <ErrorMessage>
                    {errors.email.message || Lang.requiredText}
                  </ErrorMessage>
                )}
              </FormGroup>
              <FormGroup>
                <Label>{Lang.loginPasswordContent}</Label>
                <Input
                  placeholder={Lang.loginPasswordPlaceholder}
                  name="password"
                  type="password"
                  ref={register({ required: true })}
                  onChange={clearError}
                />
                {error && (
                  <ErrorMessage>{Lang.invalidCredentialsText}</ErrorMessage>
                )}
                {errors.password && (
                  <ErrorMessage>{Lang.requiredText}</ErrorMessage>
                )}
                <ShowPassword />
                <ForgotPasswordContent>
                  {Lang.loginForgotContent}
                </ForgotPasswordContent>
              </FormGroup>
            </Flex>
            {loading && <Loader />}
            <SubmitButton type="submit" value={Lang.signinText} />
          </Form>
        </Modal.Body>
      </Modal>
    </ModalCol>
  );
};

export default LoginForm;
