/** @format */
import { TextField } from '@mui/material'
import { Button } from '@/components/ui/button'

export default function UserSignIn() {
  return (
    <div className={'w-[400px] p-[30px] text-gray-800'}>
      <div className={'mt-[50px]'}>
        <div className={'text-center text-[2em]'}>Sign In</div>
        <TextField sx={{ marginTop: '20px', marginX: 'auto' }} className={'w-[100%]'} label={'账号'} variant={'outlined'}></TextField>
        <TextField
          sx={{ marginTop: '20px', marginX: 'auto' }}
          className={'w-[100%]'}
          label={'密码'}
          type={'password'}
          variant={'outlined'}
        ></TextField>
        <Button className={'mt-[20px] w-[100%]'} size={'lg'}>
          sign in
        </Button>
        <div></div>
      </div>
    </div>
  )
}
