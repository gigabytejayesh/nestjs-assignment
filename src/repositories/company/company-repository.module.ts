import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRepositoryService } from './company-repository.service';
import { Module } from '@nestjs/common';
import { CompanyEntity } from 'src/utils/entitys/company.entity';

@Module({
	imports: [TypeOrmModule.forFeature([CompanyEntity])],
	providers: [CompanyRepositoryService],
	exports: [CompanyRepositoryService],
})
export class CompanyRepositoryModule {}
