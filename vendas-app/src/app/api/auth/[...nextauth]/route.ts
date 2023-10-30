import NextAuth from "next-auth";
import KeycloakProvider from 'next-auth/providers/keycloak'
import jwt_decode from 'jwt-decode'
import { encrypt } from '../../util/encryption';

export const authOptions = {
    providers: [

        KeycloakProvider({
            clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
            clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
            issuer: `${process.env.KEYCLOAK_REALM}`
        })

    ],
    callbacks: {
        async jwt({ token, account }: any ) {
            const nowTimeStemp = Math.floor(Date.now() / 1000)
            if (account) {
                token.decoded = jwt_decode(account.access_token);
                token.access_token = account.access_token;
                token.id_token = account.id_token;
                token.expires_at = account.expires_at;
                token.refresh_token = account.refresh_token;
                return token
            } else if (nowTimeStemp < token.expires_at){
                return token
            } else {
                console.log("Token esta expirado. Atualizar....")

                return token
            }
            
        },
        async session({ session, token }: any) {
            session.access_token = encrypt(token.access_token);
            session.id_token = encrypt(token.id_token);
            session.roles = token.decoded.realm_access.roles;
            session.error = token.error; 
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }