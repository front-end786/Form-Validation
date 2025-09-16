import { useForm } from "react-hook-form";  
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod validation schema
const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
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

  // Submit handler
  const onSubmit = (data) => {
    console.log("✅ Form submitted:", data);
    alert("Form submitted successfully!");
  };


  return (
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;
