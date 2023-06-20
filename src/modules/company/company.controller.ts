import { Body, Controller, Post, Get, Param, Query, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/company.dto';
import { CompanyEntity } from 'src/utils/entitys/company.entity';
import { JwtGuard } from 'src/utils/guards/jwt-guard';

@Controller('/company')
export class CompanyController {
	constructor(private readonly companyService: CompanyService) {}

	@Post()
	@UseGuards(JwtGuard)
	async createCompany(@Body() createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
		return await this.companyService.createCompany(createCompanyDto);
	}

	@Get(':companyId')
	@UseGuards(JwtGuard)
	async getCompanyByID(@Param('companyId') companyId: string): Promise<CompanyEntity> {
		return await this.companyService.getCompanyByID(companyId);
	}

	@Get('search')
	@UseGuards(JwtGuard)
	async searchCompanyByName(@Query('text') searchName: string): Promise<CompanyEntity[]> {
		return await this.companyService.getCompanyByName(searchName);
	}
}
