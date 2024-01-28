'use client'
import React from 'react'
import {  useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formValidSchema, formValidSchemaType } from '@/lib/validation'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import LoadingButton from './ui/loadingButton'

export default function FormComponent() {
    const form = useForm<formValidSchemaType>({
        resolver: zodResolver(formValidSchema)
    })

    const {
        trigger, register,reset, formState:{isSubmitting, errors},control,setFocus,watch,handleSubmit,setValue
     } = form;

    const onSubmit = (values: formValidSchemaType) => {
        alert(JSON.stringify(values, null, 2));
        reset();
    }
  return (
      <Form {...form}>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
              {/* if you are not using shadcn ui , you can access the errors just like this , there you have to just register your fields like */}
              {/* {
                  <form>
                      <input {...register('username')} />
                      {errors.username && <div className='text-destructive'>{errors.username.message}</div>}
                  </form>
          } */}
              {/* {
                  errors.confirmpassword && <div className='text-destructive'>
                      {errors.confirmpassword.message}
                </div>
              } */}
              <FormField
                  control={control}
                  name='username'
                  render={({ field }) => (
                      <FormItem>
                          <FormLabel>
                              Username
                          </FormLabel>
                          <FormControl>
                              <Input className='' {...field}/> 
                          </FormControl>
                          <FormMessage/>
                    </FormItem>
                  )}
              >
                  
              </FormField>
              <FormField
                  control={control}
                  name='password'
                  render={({ field }) => (
                      <FormItem>
                          <FormLabel>
                              Password
                          </FormLabel>
                          <FormControl>
                              <Input className='' {...field} type='password' />
                          </FormControl>
                          <FormMessage/>
                      </FormItem>
                  )}
              >

              </FormField>
              <FormField
                  control={control}
                  name='confirmpassword'
                  render={({ field }) => (
                      <FormItem>
                          <FormLabel>
                              Confirm Password
                          </FormLabel>
                          <FormControl>
                              <Input className='' {...field} type='password' />
                          </FormControl>
                          <FormMessage />
                      </FormItem>
                  )}
              >

              </FormField>
              <div className='mt-10'>
                  
              <LoadingButton type='submit' loading={isSubmitting} >Submit</LoadingButton>
              </div>
          </form>
          
    </Form>
  )
}
