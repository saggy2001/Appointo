export const validatePhoneNumber = (phone: string) => {
    return phone.match(/^[6-9]\d{9}$/)
}

export const validateName = (name: string) => {
    return name.match(/^[A-Za-z]+$/);
}