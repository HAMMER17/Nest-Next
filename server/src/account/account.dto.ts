import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class AccountDto {
  @ApiProperty()
  id: number
  @ApiProperty()
  ownerId: number
  @ApiProperty()
  @IsBoolean()
  isBlock: boolean
}
export class AccountPacth {
  @ApiProperty({ required: false })
  @IsBoolean()
  @Optional()
  isBlock?: boolean
}