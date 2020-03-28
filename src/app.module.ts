import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
// import { Connection } from 'typeorm';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CompaniesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
