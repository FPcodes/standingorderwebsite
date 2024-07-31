// src/schema.ts
import { z } from "zod";

// Regex pattern for letters only
const lettersOnly = /^[A-Za-z]+$/;

// Regex pattern for numeric characters only
const numericOnly = /^[0-9]+$/;

export const formDataSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }).regex(lettersOnly, { message: 'First name must contain only letters' }),
  lastName: z.string().min(1, { message: 'Last name is required' }).regex(lettersOnly, { message: 'Last name must contain only letters' }),
  clientId: z.preprocess((val) => parseInt(z.string().parse(val), 10), z.number().int().positive().max(99999, { message: 'Client ID must be a positive number with up to 5 digits' })),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits long' }).regex(numericOnly, { message: 'Phone number must contain only numeric characters' }),
  daysTraveling: z.number(),
  monday: z.boolean(),
  tuesday: z.boolean(),
  wednesday: z.boolean(),
  thursday: z.boolean(),
  friday: z.boolean(),
  saturday: z.boolean(),
  sunday: z.boolean(),
  firstPickup: z.string().min(1, { message: 'First pickup location is required' }),
  cityOne: z.string(),
  zipOne: z.string().length(5, { message: 'ZIP code one must be exactly 5 digits' }).regex(numericOnly, { message: 'ZIP code one must contain only numeric characters' }),
  firstDropoff: z.string().min(1, { message: 'First dropoff location is required' }),
  cityTwo: z.string(),
  zipTwo: z.string().length(5, { message: 'ZIP code two must be exactly 5 digits' }).regex(numericOnly, { message: 'ZIP code two must contain only numeric characters' }),
  dropoffTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/, { message: 'Dropoff time must be a valid time in HH:MM:SS format' }),
  roundTripSameAddresses: z.boolean(),
  secondPickup: z.string().min(1, { message: 'Second pickup location is required' }),
  cityThree: z.string(),
  zipThree: z.string().length(5, { message: 'ZIP code three must be exactly 5 digits' }).regex(numericOnly, { message: 'ZIP code three must contain only numeric characters' }),
  secondDropoff: z.string().min(1, { message: 'Second dropoff location is required' }),
  cityFour: z.string(),
  zipFour: z.string().length(5, { message: 'ZIP code four must be exactly 5 digits' }).regex(numericOnly, { message: 'ZIP code four must contain only numeric characters' }),
  pickupTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/, { message: 'Pickup time must be a valid time in HH:MM:SS format' }),
  travelingWithAid: z.boolean(),
  device: z.string(),
});

export type FormData = z.infer<typeof formDataSchema>;
