import React, { forwardRef } from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
interface TLoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    loading: boolean
}
export default  function LoadingButton({loading , ...props}: TLoadingButtonProps) {
  return (
      <Button disabled={loading} {...props} className={cn('', props.className)}>
          <div className='flex gap-2'>
              {
                  loading &&
                  <Loader2 size={10} className='animate-spin' />
              }
              {props.children || 'Button'}
          </div>
    </Button>
  )
}
