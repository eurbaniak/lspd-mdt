import React from "react";
import { useForm } from "react-hook-form";
import "./people.css";

const People = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="people">
      <input {...register("search")} />
    </div>
  );
};

export default People;
