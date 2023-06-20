import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity('team')
export class TeamEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 1000 })
  teamLeadName: string;

  @Column()
  companyId: string;

  @ManyToOne(() => CompanyEntity, (company) => company.teams)
  @JoinColumn({ name: 'companyId' })
  company: CompanyEntity;
}
