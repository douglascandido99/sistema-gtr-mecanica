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
  async createService(@Body() serviceDto: CreateServiceDTO): Promise<void> {
    await this.service.createService(serviceDto);
  }

  @Get(':id')
  async findServiceById(@Param('id') id: string): Promise<Service> {
    return await this.service.findServiceById(id);
  }

  @Get(':carPlate')
  async findServiceByCarPlate(
    @Param('carPlate') carPlate: string,
  ): Promise<Service[]> {
    return await this.service.findServiceByCarPlate(carPlate);
  }

  @Get(':carModel')
  async findServiceByCarModel(
    @Param('carModel') carModel: string,
  ): Promise<Service[]> {
    return await this.service.findServiceByCarModel(carModel);
  }

  @Patch(':id')
  async updateService(
    @Param('id') id: string,
    @Body() serviceDto: UpdateServiceDTO,
  ): Promise<void> {
    return await this.service.updateService(id, serviceDto);
  }

  @Delete(':id')
  async deleteService(@Param('id') id: string): Promise<void> {
    return await this.service.deleteService(id);
  }
}
