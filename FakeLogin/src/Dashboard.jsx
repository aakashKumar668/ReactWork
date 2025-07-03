const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    const handleLogout = () => {
      localStorage.removeItem("user");
      window.location.reload(); // Reload to re-check login
    };
  
    return (
      <div>
        <h2>Welcome, {user?.email}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
  export default Dashboard;
  