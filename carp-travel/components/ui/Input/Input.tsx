
type InputProps = {
    label:string;
    register: UseFormRegister<IFormValues>
    required: boolean
  }

  const Input = ({ label, register, required }: InputProps) => (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  )


export default Input