import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JWTTokenHelper } from '../jwt-token-helper';

const writePermission = ['post', 'put'];
const readPermission = ['get'];

@Injectable()
export class JwtGuard implements CanActivate {
	async canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest<Request>();
		const jwtToken = request.headers['Authorization'];
		if (!jwtToken) {
			console.log('Invalid token provided');
			return false;
		}
		let { scope }: any = await new JWTTokenHelper().verifyToken(jwtToken);
		if (scope) {
			if (scope === 'RW') {
				return true;
			} else if (scope === 'W') {
				return writePermission.find(request.method.toLowerCase) ? true : false;
			} else if (scope === 'R') {
				return readPermission.find(request.method.toLowerCase) ? true : false;
			}
		}
		return false;
	}
}
