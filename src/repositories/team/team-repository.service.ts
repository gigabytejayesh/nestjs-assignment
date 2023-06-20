import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeamDto } from 'src/modules/team/dto/team.dto';
import { TeamEntity } from 'src/utils/entitys/team.entity';
import { Repository } from 'typeorm';
const { v4: uuidv4 } = require('uuid');

@Injectable()
export class TeamRepositoryService {
	constructor(@InjectRepository(TeamEntity) private teamRepository: Repository<TeamEntity>) {}

	private baseQueryBuilder() {
		return this.teamRepository.createQueryBuilder('team');
	}

	async createTeam(teamData: CreateTeamDto): Promise<TeamEntity> {
		try {
			let newRecord = this.teamRepository.create({ id: await uuidv4(), ...teamData });
			return await this.teamRepository.save(newRecord);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getAllTeams(): Promise<[TeamEntity[], number]> {
		try {
			let queryBuilder = this.baseQueryBuilder().addGroupBy('companyId').groupBy('companyId');
			return await queryBuilder.getManyAndCount();
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
