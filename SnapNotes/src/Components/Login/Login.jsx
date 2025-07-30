import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login ()
{
  const navigate = useNavigate();

  const handleGoogleLogin = async () =>
  {
    try
    {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in");
      navigate("/");
    } catch (err)
    {
      console.error(err);
    }
  };

  return (
    <div className="p-5">
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <Link to='/phonelogin'> <button>Phone Login</button></Link>
    </div>
  );
}

export default Login;