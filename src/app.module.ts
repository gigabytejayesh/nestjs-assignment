import { TeamRepositoryModule } from './repositories/team/team-repository.module';
import { CompanyRepositoryModule } from './repositories/company/company-repository.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';
import { TeamModule } from './modules/team/team.module';
import { CompanyEntity } from './utils/entitys/company.entity';
import { TeamEntity } from './utils/entitys/team.entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSSWORD,
			database: process.env.DB_NAME,
			autoLoadEntities: false,
			entities: [CompanyEntity, TeamEntity],
			synchronize: false,
			logging: true,
		}),
		TeamRepositoryModule,
		CompanyRepositoryModule,
		CompanyModule,
		TeamModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
