import { Outlet } from "react-router";


const AuthLayout = () => {
    return (
        <div className="auth-layout">
          <header>
            <h1>Welcome to Auth</h1>
          </header>
          <main>
            <Outlet /> 
          </main>
          <footer>
            <p>© 2024 MyApp</p>
          </footer>
        </div>
      );
};

export default AuthLayout;


