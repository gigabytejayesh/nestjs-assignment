import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamRepositoryService } from './team-repository.service';
import { Module } from '@nestjs/common';
import { TeamEntity } from 'src/utils/entitys/team.entity';

@Module({
	imports: [TypeOrmModule.forFeature([TeamEntity])],
	providers: [TeamRepositoryService],
	exports: [TeamRepositoryService],
})
export class TeamRepositoryModule {}
