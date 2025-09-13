export const validateLogin = (login: string) =>
    login.trim().length > 0 &&login.trim().length <=100;

export const validatePassword = (password: string | null, type: string) =>
    type === 'LDAP' || (password && password.length > 0 && password.length <= 100);

export const arrayLabel = (value : string) =>
    value.split(';').flatMap (value => ({text: value.trim()})).filter(value=>value.text.length >0);