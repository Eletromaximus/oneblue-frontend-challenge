import * as yup from 'yup'
import { useForm, useController, UseControllerProps } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormInputs {
  name: string,
  email: string,
  cel: string,
  password: string
}
const schema = yup.object({
  name: yup.string().required('Por favor, insira um nome valido'),
  email: yup.string().email('Por favor, insira um email valido').required(),
  cel: yup.string().trim().required()
    .matches(/(\(\d{2}\)\s)(\d{4,5}-\d{4})/g, 'Digite um telefone valido').required()
})

function Input (props: UseControllerProps<IFormInputs>) {
  const { field } = useController(props)
  return (
    <input
      {...field}
      onChange={(event) => {
        event.target.maxLength = 15
        event.target.value = event.target.value
          .replace(/(\d\d)(\d{4,5})(\d{4})/g, '($1) $2-$3')
        const { value } = event.target
        console.log(value)
        field.onChange(value)
      }}
    />
  )
}

const onSubmit = (data: IFormInputs) => console.log(data)

export function Form () {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  return (

  <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input {...register('name')}/>
        {errors.name?.type && <p>{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input {...register('email')}/>
        {errors.email?.type && <p>{errors.email.message}</p>}

        <label htmlFor="cel">Telefone</label>
        <Input control={control} name='cel' />
        {errors.cel?.type && <p>{errors.cel.message}</p>}

        <label htmlFor="password"></label>
        <input
          type="password"
          {...register('password')}
        />

        <input type="submit" value='confirmar'/>
      </form>
  )
}
