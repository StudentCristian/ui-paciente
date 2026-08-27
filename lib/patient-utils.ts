import { differenceInYears, parseISO } from 'date-fns'

export const initials = (n: string) =>
  n
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export const age = (d?: string, asOf: Date = new Date()) =>
  d ? differenceInYears(asOf, parseISO(d)) : undefined

export const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
