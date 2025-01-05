import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateServiceDTO {
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
  readonly carEngine?: number;

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
