import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
} from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function JoinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submit = ({ name, email, phone }: FormData) => {
    console.log({ name, email, phone });
  };
  useEffect(() => {
    console.log(Object.values(errors).map((error)=>error.message));
  }, [errors]);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Input id="name" type="text" required {...register("name")} />
      </div>
      <div>
        <Input id="email" type="email" required {...register("email")} />
      </div>
      <div>
        <Input
          id="phone"
          type="tel"
          required
          {...register("phone", {
            pattern: { value: /\d{10,11}/, message: "Invalid phone number" },
          })}
        />
      </div>
      <div>
        <button type="submit">Join</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

const Input = forwardRef(function Input(
  { id, name, ...props }: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input id={id} name={name} ref={ref} {...props} />
    </>
  );
});
