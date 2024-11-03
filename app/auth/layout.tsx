import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div></div>
      {children}
    </div>
  );
};

export default AuthLayout;
