import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  //   const { register, handleSubmit } = useForm({
  //     defaultValues: {
  //       email: "",
  //       password: "",
  //     },
  //   });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    console.log(email, password);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   const handleLogin = handleSubmit((email, password) => {
  //     console.log(email, password);
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });
  return (
    <div className="people">
      <form onSubmit={handleLogin}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {/* <form onSubmit={handleLogin}>
        <input {...register("email")} />
        <input {...register("password")} type="password" />
        <button type="submit">login</button>
      </form> */}
    </div>
  );
};

export default Login;
