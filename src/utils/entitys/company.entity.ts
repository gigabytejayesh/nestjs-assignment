import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TeamEntity } from './team.entity';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 1000 })
  name: string;

  @Column({ length: 1000 })
  ceo_name: string;

  @Column({ length: 1000 })
  address: string;

  @Column('date')
  inceptionDate: Date;

  @OneToMany(() => TeamEntity, (team) => team.company)
  teams: TeamEntity[];
}
