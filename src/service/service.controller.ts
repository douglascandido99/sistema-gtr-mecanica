import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDTO } from './dto/create-service.dto';
import { UpdateServiceDTO } from './dto/update-service.dto';
import { Service } from '@prisma/client';

@Controller('service')
export class ServiceController {
  constructor(private readonly service: ServiceService) {}

  @Post('create')
  async createService(@Body() serviceDto: CreateServiceDTO): Promise<Service> {
    return await this.service.createService(serviceDto);
  }

  @Get('id/:id')
  async findServiceById(@Param('id') id: string): Promise<Service> {
    return await this.service.findServiceById(id);
  }

  @Get('car-plate/:carPlate')
  async findServiceByCarPlate(
    @Param('carPlate') carPlate: string,
  ): Promise<Service[]> {
    return await this.service.findServiceByCarPlate(carPlate);
  }

  @Get('car-model/:carModel')
  async findServiceByCarModel(
    @Param('carModel') carModel: string,
  ): Promise<Service[]> {
    return await this.service.findServiceByCarModel(carModel);
  }

  @Patch('id/:id')
  async updateService(
    @Param('id') id: string,
    @Body() serviceDto: UpdateServiceDTO,
  ): Promise<Service> {
    return await this.service.updateService(id, serviceDto);
  }

  @Delete('id/:id')
  async deleteService(@Param('id') id: string): Promise<void> {
    return await this.service.deleteService(id);
  }
}
