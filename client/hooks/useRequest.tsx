import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const doRequest = async () => {
    setLoading(true);
    try {
      setErrors(null);

      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }
      setLoading(false);
      return response.data;
    } catch (err) {
      console.log(err.response);
      setLoading(false);
      setErrors(
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <ul>
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors, loading };
};
