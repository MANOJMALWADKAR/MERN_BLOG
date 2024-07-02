import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorEssage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSumit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password)
      return setErrorEssage("All Fields are Required");
    try {
      setIsLoading(true);
      setErrorEssage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setIsLoading(false);
        return setErrorEssage(data.message);
        // return setErrorEssage("username/email has already been taken");
      }

      setIsLoading(false);
      if (res.ok) {
        navigate("/SignIn");
      }
    } catch (error) {
      setErrorEssage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col gap-5 md:flex-row md:items-center">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
         rounded-lg text-white"
            >
              Namaste
            </span>
            Dosto
          </Link>
          <p className="mt-5 text-sm">
            Start with creating account or sign up with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSumit}>
            <div>
              <label>Username</label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password</label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              outline
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading..</span>
                </>
              ) : (
                "Sing Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="SignIn" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      {errorMessage && (
        <Alert className="mt-5" color="failure">
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}

export default SignUp;
