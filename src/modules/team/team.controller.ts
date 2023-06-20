import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/team.dto';
import { TeamEntity } from 'src/utils/entitys/team.entity';
import { JwtGuard } from 'src/utils/guards/jwt-guard';

@Controller('/team')
export class TeamController {
	constructor(private teamService: TeamService) {}

	@Post('company/:companyId')
	@UseGuards(JwtGuard)
	async createCompany(
		@Body() createTeamDto: CreateTeamDto,
		@Param('companyId') companyId: string,
	): Promise<TeamEntity> {
		return await this.teamService.createTeam(createTeamDto, companyId);
	}

	@Get()
	@UseGuards(JwtGuard)
	async getAllTeams(): Promise<[TeamEntity[], number]> {
		return await this.teamService.getAllTeams();
	}
}
