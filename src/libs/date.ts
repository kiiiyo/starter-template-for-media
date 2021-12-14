import { format, parseISO } from 'date-fns'

export function formatUtcDay(date: string): string {
  return format(parseISO(date), 'yyyy.MM.dd')
}
