// Map on formdata and log key and values
const formArray = Array.from(fd.entries())
const formFields = aaa.map(([key, value]) => {
  return { key, value }
})
console.log(forFields)

// Convert base64 image string to FormData
export const base64_to_FormData = (fd: FormData, base64Image: string): FormData => {
  const byteCharacters = atob(base64Image.split(",")[1])
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)

  const blob = new Blob([byteArray], { type: "image/png" })

  const file = new File([blob], `${nanoid()}.png`, { type: "image/png" })

  fd.append("avatar", file)

  return fd
}
