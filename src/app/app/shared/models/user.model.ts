export class User {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
    address: string;
    phoneNumber: number;
    email: string;
    dob: string;
    gender: string;
    image: string;
    token: string
limit: Number
    constructor(details: any) {
        this.name = details.name || '';
        this.username = details.username || '';
        this.password = details.password || '';
        this.confirmPassword = details.confirmPassword || '';
        this.address = details.address || '';
        this.phoneNumber = details.phoneNumber || '';
        this.email = details.email || '';
        this.dob = details.dob || '';
        this.gender = details.gender || '';
        this.image = details.image || '';
        this.token = details.token || ''
        this.limit = details.limit || ''
    }
}