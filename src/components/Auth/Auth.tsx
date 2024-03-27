import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import {z} from 'zod'


const schema = z.object({
  email : z.string().email(),
  password : z.string().min(8)
})


type FormFields = z.infer<typeof schema>

const Auth = () => {
  
  const {register,handleSubmit,formState : {errors,isSubmitting}} = useForm<FormFields>({
    defaultValues : {
      email : 'example@gmail.com',
      password : ''
    },
    resolver : zodResolver(schema)
  })

  const onSubmit : SubmitHandler<FormFields> = async (data) =>{

    await new Promise((resolve) => setTimeout(resolve,1000));

    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        {...register("email")} 
        type="text" 
        placeholder="email" />
        {errors.email && <span>{errors.email.message}</span>}
        <input {...register("password")} type="password" placeholder="Password" />
        {errors.password && <span>{errors.password.message}</span>}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Loading' : 'Submitting' }
        </button>
    </form>
  )
}

export default Auth