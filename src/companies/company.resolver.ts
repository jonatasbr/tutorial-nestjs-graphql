import { Resolver, Query } from '@nestjs/graphql';
import { Company } from './model/company.entity';
import { CompanyService } from './company.service';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private companyService: CompanyService) {}

  @Query(() => [Company])
  public async getCompanies(): Promise<Company[]> {
    return await this.companyService.findAll();
  }
}
