import { IsNotEmpty } from 'class-validator';

export class RequestDTO {
  @IsNotEmpty()
  jobname: string;
}
