import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

const year = new Date().getFullYear();

export const LoginForm = ({ onCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "test@",
      password: "",
    },
    mode: "onBlur",
  });

  console.log(errors);

  // const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);

  // const handleUpdate = (event) => {
  //   const { name, value } = event.target;
  //   setForm((prev) => ({ ...prev, [name]: value }));
  // };

  const onSubmit = (data) => {
    console.log(data);
    login();
    // onCloseModal();
  };

  // const { email, password } = form;
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
            // ref={inputRef}
            // value={email}
            // name="email"
            // onChange={handleUpdate}
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
            // value={password}
            // onChange={handleUpdate}
            // name="password"
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

// export class LoginForm extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = (event) => {
//     const { value, name } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     toast.info(`${email} ${password}`);
//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <form
//         className="form-signin d-flex align-items-center justify-content-center mt-5"
//         onSubmit={this.handleSubmit}
//       >
//         <div className="d-block" style={{ width: 300, height: "max-content" }}>
//           <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//           <div className="form-floating">
//             <input
//               value={email}
//               name="email"
//               onChange={this.handleChange}
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="name@example.com"
//             />
//             <label htmlFor="email">Email address</label>
//           </div>
//           <div className="form-floating mt-4">
//             <input
//               value={password}
//               onChange={this.handleChange}
//               name="password"
//               type="password"
//               className="form-control"
//               id="pass"
//               placeholder="Password"
//             />
//             <label htmlFor="pass">Password</label>
//           </div>

//           <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
//             Sign in
//           </button>

//           <p className="mt-5 mb-3 text-muted">© {year}</p>
//         </div>
//       </form>
//     );
//   }
// }

// export const LoginForm = () => {
//   return (
//     <form className="form-signin d-flex align-items-center justify-content-center mt-5">
//       <div className="d-block" style={{ width: 300, height: "max-content" }}>
//         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//         <div className="form-floating">
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="name@example.com"
//           />
//           <label htmlFor="email">Email address</label>
//         </div>
//         <div className="form-floating mt-4">
//           <input
//             type="password"
//             className="form-control"
//             id="pass"
//             placeholder="Password"
//           />
//           <label htmlFor="pass">Password</label>
//         </div>

//         <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
//           Sign in
//         </button>

//         <p className="mt-5 mb-3 text-muted">© {year}</p>
//       </div>
//     </form>
//   );
// };
