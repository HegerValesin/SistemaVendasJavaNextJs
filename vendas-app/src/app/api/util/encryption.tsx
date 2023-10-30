import Cryptr from "cryptr";

interface Prop {
    children: React.ReactNode;
    secretKey?: string | undefined
}

export function encrypt(text: any){
    const secretKey = process.env.KEYCLOAK_SECRET || "text"
    const cryptr = new Cryptr(secretKey) 

    const encryptedString = cryptr.encrypt(text);
    return encryptedString;
}

export function decrypt(encryptedString: any){
    const secretKey: string | undefined = process.env.KEYCLOAK_SECRET || "text"
    const cryptr = new Cryptr(secretKey) 

    const text = cryptr.decrypt(encryptedString);
    return text;
}
