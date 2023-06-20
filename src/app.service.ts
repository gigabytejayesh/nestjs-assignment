import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getAssignmentAppDetails(): string {
		return 'This is NestJS Assignment App';
	}
}
