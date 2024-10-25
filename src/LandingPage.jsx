import React from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate();  // use the hook to navigate programmatically

  const handleEmailSignIn = () => {
    navigate("/login");  // navigate to the login page on button click
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Replace text with the logo image */}
        <img src={"https://assets-v2.circle.so/jfmbzu2gv6l6az1h9smbu8cpznho"} alt="Funnels Mastery Academy" style={styles.logo} />
        <h2 style={styles.heading}>Log in to your account</h2>
        <button style={styles.emailButton} onClick={handleEmailSignIn}>
          Sign in with an email
        </button>
        <button onClick={() => window.location.href = "https://login.circle.so/sign_in?request_host=funnels-mastery-academy.circle.so"} style={styles.socialButton}>Continue with Twitter</button>
        <button onClick={() => window.location.href = "https://login.circle.so/sign_in?request_host=funnels-mastery-academy.circle.so"} style={styles.socialButton}>Continue with Facebook</button>
        <div style={styles.links}>
          <p style={styles.signupText}>
            Not a member? <a href="https://www.funnelsmasteryacademy.com/" style={styles.link}>Sign up</a>
          </p>
          <a href="https://funnels-mastery-academy.circle.so" style={styles.link}>Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f0f0f0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "380px",
    width: "100%",
  },
  logo: {
    maxWidth: "35%",  // Make the logo responsive
    height: "auto",
    marginBottom: "0.1rem",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "2.2rem",
  },
  emailButton: {
    backgroundColor: "#f05a28",
    color: "#fff",
    border: "none",
    borderRadius: "28px",
    padding: "0.75rem",
    width: "90%",
    marginBottom: "1.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  socialButton: {
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #ccc",
    borderRadius: "28px",
    padding: "0.75rem",
    width: "90%",
    marginBottom: "1.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  links: {
    marginTop: "1rem",
  },
  signupText: {
    marginBottom: "0.5rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default LandingPage;
