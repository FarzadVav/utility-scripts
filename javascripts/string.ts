// Convert Persian numbers to English numbers
export const persianToEnglish = (input: string) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  let result = input
  persianDigits.forEach((_, index) => {
    result = result.split(persianDigits[index]).join(englishDigits[index])
  })

  return result
}

// Convert English numbers to Persian numbers
export const englishToPersian = (input: string) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  let result = input
  englishDigits.forEach((_, index) => {
    result = result.split(englishDigits[index]).join(persianDigits[index])
  })

  return result
}
