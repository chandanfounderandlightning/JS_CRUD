import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoginData } from '../../../session/login/LoginData';
import loginThunk from '../../../session/login/loginThunk';
import { RootState } from '../../../appReducer';

interface ThunkResult {
  error?: Error;
}

const useLoginForm = (): {
  loading: boolean;
  error: boolean;
  isLogged: boolean;
  saveForm: (data: LoginData) => Promise<void>;
  clearError: () => void;
} => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const isLogged = useSelector((state: RootState) => state.session.logged);
  const login = useCallback((data) => dispatch(loginThunk(data)), [dispatch]);
  const clearError = useCallback(() => setError(false), [setError]);

  const saveForm = useCallback(
    async (data: LoginData) => {
      setLoading(true);
      setError(false);

      try {
        const result = (await login(data)) as ThunkResult;

        if (result.error) {
          throw result.error;
        }
      } catch (err) {
        setError(true);
      }

      setLoading(false);
    },
    [setLoading, setError, login]
  );

  return { saveForm, clearError, loading, error, isLogged };
};

export default useLoginForm;
