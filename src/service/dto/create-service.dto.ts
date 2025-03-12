import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateServiceDTO {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;

  @IsOptional()
  @IsString()
  readonly customerName?: string;

  @IsOptional()
  @IsNumber()
  readonly customerPhoneNumber?: number;

  @IsNotEmpty()
  @IsString()
  readonly carPlate: string;

  @IsOptional()
  @IsString()
  readonly carBrand?: string;

  @IsNotEmpty()
  @IsString()
  readonly carModel: string;

  @IsOptional()
  @IsNumber()
  readonly carYear?: number;

  @IsOptional()
  @IsNumber()
  readonly carModelYear?: number;

  @IsOptional()
  @IsString()
  readonly carColor?: string;

  @IsOptional()
  @IsString()
  readonly carEngine?: string;

  @IsOptional()
  @IsString()
  readonly employee?: string;

  @IsOptional()
  @IsNumber()
  readonly totalPrice?: number;

  @IsOptional()
  @IsString()
  readonly serviceDone?: string;
}
