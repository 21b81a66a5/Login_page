import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
