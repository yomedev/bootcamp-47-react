import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const year = new Date().getFullYear();

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const navigate = useNavigate();

  console.log(errors);

  const { login } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    login();
    navigate("/articles", { replace: true });
  };

  return (
    <form
      className="form-signin d-flex align-items-center justify-content-center mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="d-block" style={{ width: 300, height: "max-content" }}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            {...register("email", {
              required: { value: true, message: "Email is required field" },
              minLength: {
                value: 6,
                message: "Email must be at least 6 characters",
              },
            })}
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          {errors?.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input
            {...register("password", {
              required: { value: true, message: "Password is required field" },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /(?=.*[0-9])/,
                message: "Password must have at least one digit",
              },
            })}
            type="password"
            className="form-control"
            id="pass"
            placeholder="Password"
          />
          {errors?.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <label htmlFor="pass">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
          Sign in
        </button>

        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </div>
    </form>
  );
};
