import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'companies' })
export class Company {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column({ name: 'code_cvm', nullable: false })
  codeCvm: string;

  @Field({ nullable: false })
  @Column({ name: 'code_trade', nullable: false })
  codeTrade: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  cnpj: string;

  @Field({ nullable: false })
  @Column({ name: 'name_trade', nullable: false })
  nameTrade: string;
}
