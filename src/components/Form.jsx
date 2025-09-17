import { useForm } from "react-hook-form";  
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

// Zod validation schema
const formSchema = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 3 characters")
    // .regex(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"),
     .regex(/^[a-zA-Z0-9_-]+$/,"Username can only contain letters, numbers, underscores (_) or hyphens (-)"),

  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[A-Za-z]+$/, "First name cannot contain numbers"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .regex(/^[A-Za-z]+$/, "Last name cannot contain numbers"),

  mailAddress: z.string().email("Enter valid mail like: example@mail.com"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});


function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();


  // Submit handler
  const onSubmit = (data) => {
    console.log("✅ Form submitted:", data);
    alert("Form submitted successfully!");
    navigate("/users");

  };


  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div className="subForm">

    //   <input
    //     type="text"
    //     placeholder="Enter username"
    //     {...register("username")}
    //     />
    //   {errors.username && (
    //       <span style={{ color: "red" }}>{errors.username.message}</span>
    //     )}
    //     </div>
    //     <div className="subForm">
    //   <input
    //     type="text"
    //     placeholder="Enter your Email"
    //     {...register("mailAddress")}
    //   />
      
    //   {errors.mailAddress && (
    //     <span style={{ color: "red" }}>{errors.mailAddress.message}</span>
    //   )}
    //     </div>

    //   <div className="subForm">
    //   <input
    //     type="password"
    //     placeholder="Enter password"
    //     {...register("password")}
    //   />
    //   {errors.password && (
    //     <span style={{ color: "red" }}>{errors.password.message}</span>
    //   )}
    //     </div>
    //  <button className="gradientButton" type="submit">Submit</button>
    // </form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="subForm">
        <input
          type="text"
          placeholder="Enter username"
          {...register("username")}
        />
        {errors.username && (
          <span style={{ color: "red" }}>{errors.username.message}</span>
        )}
      </div>

      <div className="subForm">
        <input
          type="text"
          placeholder="Enter First Name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName.message}</span>
        )}
      </div>

      <div className="subForm">
        <input
          type="text"
          placeholder="Enter Last Name"
          {...register("lastName")}
        />
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName.message}</span>
        )}
      </div>

      <div className="subForm">
        <input
          type="text"
          placeholder="Enter your Email"
          {...register("mailAddress")}
        />
        {errors.mailAddress && (
          <span style={{ color: "red" }}>{errors.mailAddress.message}</span>
        )}
      </div>

      <div className="subForm">
        <input
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
      </div>

      <button className="gradientButton" type="submit">Submit</button>
    </form>

  );
}

export default FormValidation;
