import { ApiProperty } from "@nestjs/swagger"
import { $Enums } from "@prisma/client"
import { IsIn, IsOptional } from "class-validator"


export class BlockItemDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  blockListId: number

  @ApiProperty({
    enum: [$Enums.BlockType.Website, $Enums.BlockType.Keyword]
  })
  type: $Enums.BlockType;

  @ApiProperty()
  createdAt: Date
  @ApiProperty()
  data: string
}

export class BlockListDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  ownerId: number

  @ApiProperty({
    type: [BlockItemDto],
  })
  items: BlockItemDto[]
}

export class BlockQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  q?: string
}

export class AddBlockDto {
  @ApiProperty({
    enum: [$Enums.BlockType.Website, $Enums.BlockType.Keyword]
  })
  @IsIn([$Enums.BlockType.Website, $Enums.BlockType.Keyword])
  type: $Enums.BlockType
  @ApiProperty()
  data: string
}