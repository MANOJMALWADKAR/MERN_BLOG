import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
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
          <form className="flex flex-col gap-4">
            <div>
              <label>Username</label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <label>Email</label>
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <label>Password</label>
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" outline type="submit">
              Sign up
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
    </div>
  );
}

export default SignUp;
