export const validatePhoneNumber = (phone: number) => {
    return phone.toString().match(/^[6-9]\d{9}$/);
}
