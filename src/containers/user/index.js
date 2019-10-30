import React, { useState, memo } from 'react';

const UserContext = React.createContext();

export default function withUserProvider(WrappedComponent) {
  const WithUser = (props) => {
    const [user] = useState({ loading: false, detail: null });

    return (
      <UserContext.Provider value={{ user, actions: {} }}>
        <WrappedComponent {...props} />
      </UserContext.Provider>
    );
  };

  return memo(WithUser);
}
