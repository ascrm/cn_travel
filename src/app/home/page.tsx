/** @format */

import HeaderNavbar from '../../components/header-navbar'
import { Button, TextField } from '@mui/material'

export default function Page() {
  return (
    <div>
      <HeaderNavbar></HeaderNavbar>
      <div className={"relative h-[650px] bg-black bg-opacity-30 bg-[url('/carousel4.jpg')] bg-cover bg-center bg-blend-multiply"}>
        <div className={'absolute left-[15%] top-[50px] w-[400px] rounded-lg bg-white px-[30px] py-[50px]'}>
          <TextField className={'w-[100%]'} label={'起点'} variant={'outlined'}></TextField>
          <TextField sx={{ marginTop: '20px' }} className={'w-[100%]'} label={'终点'} variant={'outlined'}></TextField>

          <TextField sx={{ marginTop: '20px' }} className={'w-[100%]'} label={'出发'} variant={'outlined'}></TextField>
          <TextField sx={{ marginTop: '20px' }} className={'w-[100%]'} label={'返回'} variant={'outlined'}></TextField>

          <Button
            sx={{
              backgroundColor: 'rgb(0, 168, 143)',
              marginTop: '40px',
              width: '100%',
            }}
            variant="contained"
            size={'large'}
          >
            获取最便宜的票
          </Button>
        </div>
        <div className={'absolute right-[25%] top-[25%] text-white'}>
          <div className={'text-[2.5em] font-bold'}>搭乘火车和巴士轻松旅游中国</div>
          <div className={'text-[2em] font-bold text-[#f02f6e]'}>提前预订可平均节省 61% *</div>
        </div>
      </div>
    </div>
  )
}
