import { sign, verify } from 'jsonwebtoken';

export class JWTTokenHelper {
	async signToken(data: any) {
		return sign(data, process.env.TOKEN_SECRET);
	}

	async verifyToken(token: string) {
		try {
			return verify(token, process.env.TOKEN_SECRET);
		} catch (error) {
			throw error;
		}
	}
}
