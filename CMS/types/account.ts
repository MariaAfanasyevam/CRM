export type AccountType= 'LDAP' | 'LOCAL'
export interface Account{
    id: string,
    label: {text: string} [],
    type: AccountType;
    login: string;
    password: string| null;
}