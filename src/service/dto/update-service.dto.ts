import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDTO } from './create-service.dto';

export class UpdateServiceDTO extends PartialType(CreateServiceDTO) {
  readonly customerName?: string;
  readonly customerPhoneNumber?: number;
  readonly carPlate?: string;
  readonly carBrand?: string;
  readonly carModel?: string;
  readonly carYear?: number;
  readonly carModelYear?: number;
  readonly carColor?: string;
  readonly carEngine?: string;
  readonly employee?: string;
  readonly serviceDone?: string;
  readonly totalPrice?: number;
}
