import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyRepositoryModule } from 'src/repositories/company/company-repository.module';

@Module({
	imports: [CompanyRepositoryModule],
	controllers: [CompanyController],
	providers: [CompanyService, CompanyRepositoryModule],
})
export class CompanyModule {}
