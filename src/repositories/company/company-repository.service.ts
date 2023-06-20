import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyDto } from 'src/modules/company/dto/company.dto';
import { CompanyEntity } from 'src/utils/entitys/company.entity';
import { Repository } from 'typeorm';
const { v4: uuidv4 } = require('uuid');

@Injectable()
export class CompanyRepositoryService {
	constructor(@InjectRepository(CompanyEntity) private companyRepository: Repository<CompanyEntity>) {}

	private baseQueryBuilder() {
		return this.companyRepository.createQueryBuilder('company');
	}

	async createCompany(companyData: CreateCompanyDto): Promise<CompanyEntity> {
		try {
			let newRecord = this.companyRepository.create({ id: await uuidv4(), ...companyData });
			return await this.companyRepository.save(newRecord);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getCompanyByID(id: string): Promise<CompanyEntity> {
		try {
			let queryBuilder = this.baseQueryBuilder().where('id = :id', { id });
			return await queryBuilder.getOne();
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getCompanyByName(name: string): Promise<CompanyEntity[]> {
		try {
			let queryBuilder = this.baseQueryBuilder().where('name like :name', { name: `%${name}%` });
			return await queryBuilder.getMany();
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
