import { Injectable } from '@nestjs/common';
import { TeamRepositoryService } from 'src/repositories/team/team-repository.service';
import { CreateTeamDto } from './dto/team.dto';
import { TeamEntity } from 'src/utils/entitys/team.entity';
import { CompanyRepositoryService } from 'src/repositories/company/company-repository.service';
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class TeamService {
	constructor(
		private teamRepositoryService: TeamRepositoryService,
		private companyRepositoryService: CompanyRepositoryService,
	) {}

	async createTeam(teamData: CreateTeamDto, companyId: string): Promise<TeamEntity> {
		try {
			let company = await this.companyRepositoryService.getCompanyByID(companyId);
			if (!company) {
				throw new HttpException(`Company with ID ${companyId} is not available.`, 400);
			}
			teamData['companyId'] = companyId;
			return await this.teamRepositoryService.createTeam(teamData);
		} catch (error) {
			throw error;
		}
	}

	async getAllTeams(): Promise<[TeamEntity[], number]> {
		return await this.teamRepositoryService.getAllTeams();
	}
}
