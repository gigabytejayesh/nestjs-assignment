import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { CompanyRepositoryModule } from 'src/repositories/company/company-repository.module';
import { TeamRepositoryModule } from 'src/repositories/team/team-repository.module';

@Module({
	imports: [TeamRepositoryModule, CompanyRepositoryModule],
	controllers: [TeamController],
	providers: [TeamService, TeamRepositoryModule],
})
export class TeamModule {}
