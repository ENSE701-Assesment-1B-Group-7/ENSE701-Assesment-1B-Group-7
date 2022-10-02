import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("claim")} placeholder="Article Claim" /></p> 
      <p><input {...register("language")} placeholder="Language" /></p> 
      <p><input {...register("source")} placeholder="Source" /></p> 
      <p><input {...register("authoraffiliations")} placeholder="Author Affiliations" /></p>
      <p><input {...register("isbn")} placeholder="ISBN" /></p>
      <p><input {...register("rights")} placeholder="Rights" /></p>
     
      <p>{result}</p>
      <input type="submit" value="Submit Article"/>
    </form>
  );
}
export default SubmissionForm;
