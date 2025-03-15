// Time spended from a date
export const timeAgo = (date: string): string => {
  const seconds: number = Math.floor((new Date().getTime() - (new Date(date)).getTime()) / 1000)
  const minutes: number = Math.floor(seconds / 60)
  const hours: number = Math.floor(minutes / 60)
  const days: number = Math.floor(hours / 24)
  const weeks: number = Math.floor(days / 7)
  const months: number = Math.floor(days / 30)
  const years: number = Math.floor(days / 364)

  const rtf: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat("fa", { numeric: "auto" })

  if (years) return rtf.format(-years, "year")
  if (months) return rtf.format(-months, "month")
  if (weeks) return rtf.format(-weeks, "week")
  if (days) return rtf.format(-days, "day")
  if (hours) return rtf.format(-hours, "hour")
  if (minutes) return rtf.format(-minutes, "minute")

  return "جدید"
}
