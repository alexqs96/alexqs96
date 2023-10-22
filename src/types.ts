import {z} from 'zod'

export interface MessageInterface {
  name: string
  email: string
  message: string
}

export const MessageSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(2)
});

export type TMessageSchema = z.infer<typeof MessageSchema>