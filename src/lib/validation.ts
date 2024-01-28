import { z } from 'zod';

export const formValidSchema = z.object({
    username: z.string().min(1, ""),
    password: z.string().min(10, "minimum 10 characters required"),
    confirmpassword: z.string().min(10, 'minimum 10 character required')
}).refine(data => data.password === data.confirmpassword, {
    message: 'passwords did not match',
    path:['confirmpassword']
})

export type formValidSchemaType = z.infer<typeof formValidSchema>