import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/company.dto';
import { CompanyRepositoryService } from 'src/repositories/company/company-repository.service';
import { CompanyEntity } from 'src/utils/entitys/company.entity';

@Injectable()
export class CompanyService {
	constructor(private companyRepositoryService: CompanyRepositoryService) {}

	async createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
		return await this.companyRepositoryService.createCompany(createCompanyDto);
	}

	async getCompanyByID(companyId: string): Promise<CompanyEntity> {
		return await this.companyRepositoryService.getCompanyByID(companyId);
	}

	async getCompanyByName(searchText: string): Promise<CompanyEntity[]> {
		return await this.companyRepositoryService.getCompanyByName(searchText);
	}
}
