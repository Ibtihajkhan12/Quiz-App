import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "./supabase";
import Swal from "sweetalert2";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter both email and password.",
      });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      if (error.message.toLowerCase().includes("user already registered")) {
        Swal.fire({
          icon: "warning",
          title: "User Already Registered",
          text: "Redirecting to login page...",
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: error.message,
        });
      }
    } else {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Check your email to confirm your account. Redirecting...",
        timer: 3000,
        showConfirmButton: false,
      });

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>

        <p className="redirect-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Log In</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
