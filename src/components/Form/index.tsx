import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormStyle } from './styles'
import { api } from '../services/api'

interface IFormInputs {
  name: string,
  // email: string,
  // cel: string,
  password: string,
}

interface IForm {
  address: string
}

const schema = yup.object({
  name: yup.string().required('Por favor, insira um nome valido'),
  // email: yup.string().email('Por favor, insira um email valido').required(),
  // cel: yup.string().trim().required()
  //   .matches(/(\(\d{2}\)\s)(\d{4,5}-\d{4})/g, 'Digite um telefone valido').required(),
  password: yup.string().required('Por favor, insira uma senha valida')
})

// function Input (props: UseControllerProps<IFormInputs>) {
//   const { field } = useController(props)
//   return (
//     <input
//       {...field}
//       onChange={(event) => {
//         event.target.maxLength = 15
//         event.target.value = event.target.value
//           .replace(/(\d\d)(\d{4,5})(\d{4})/g, '($1) $2-$3')
//         const { value } = event.target
//         field.onChange(value)
//       }}
//     />
//   )
// }

export function Form ({ address }: IForm) {
  const {
    register,
    handleSubmit,
    // control,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: IFormInputs) => {
    try {
      const response = await api.post(address, data)
      console.log(response)
      if (response.status === 200) {
        alert('cadastro realizado com sucesso')
      }
    } catch (err) {
      console.log(err)
      alert('Erro no cadastro, tente novamente')
    }
  }

  return (
    <FormStyle>
      <h1>Entre em contato</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name"><h3>Nome</h3></label>
        <input {...register('name')}/>
        {errors.name?.type && <p>{errors.name.message}</p>}

        {/* <label htmlFor="email"><h3>Email</h3></label>
        <input {...register('email')}/>
        {errors.email?.type && <p>{errors.email.message}</p>}

        <label htmlFor="cel"><h3>Telefone</h3></label>
        <Input control={control} name='cel' />
        {errors.cel?.type && <p>{errors.cel.message}</p>} */}

        <label htmlFor="password"><h3>Senha</h3></label>
        <input
          type="password"
          {...register('password', {
            maxLength: 30
          })}
        />
        {errors.password?.type && <p>{errors.password.message}</p>}

        <input type="submit" value='confirmar'/>
      </form>
    </FormStyle>
  )
}
