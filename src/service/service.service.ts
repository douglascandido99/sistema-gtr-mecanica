import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ServiceRepository } from './repository/service.repository';
import { CreateServiceDTO } from './dto/create-service.dto';
import { UpdateServiceDTO } from './dto/update-service.dto';
import { Service } from '@prisma/client';

@Injectable()
export class ServiceService {
  constructor(private readonly service: ServiceRepository) {}

  async createService(serviceDto: CreateServiceDTO): Promise<void> {
    await this.service.createService({ ...serviceDto });
  }

  async findServiceById(id: string): Promise<Service> {
    const service = await this.service.findServiceById(id);
    if (!service) throw new NotFoundException('Serviço não encontrado');

    try {
      return service;
    } catch (error) {
      throw new InternalServerErrorException(
        `Falhou ao encontrar serviço pelo id: ${id}`,
      );
    }
  }

  async findServiceByCarPlate(carPlate: string): Promise<Service[]> {
    const service = await this.service.findServiceByCarPlate(carPlate);
    if (!service)
      throw new NotFoundException('Placa não encontrada no sistema');

    try {
      return service;
    } catch (error) {
      throw new InternalServerErrorException(
        'Falhou ao encontrar placa no sistema',
      );
    }
  }

  async findServiceByCarModel(carModel: string): Promise<Service[]> {
    const service = await this.service.findServiceByCarModel(carModel);
    if (!service)
      throw new NotFoundException('Modelo de carro não encontrado no sistema');

    try {
      return service;
    } catch (error) {
      throw new InternalServerErrorException(
        'Falhou ao encontrar modelo de carro',
      );
    }
  }

  async updateService(id: string, serviceDto: UpdateServiceDTO): Promise<void> {
    const service = await this.service.findServiceById(id);
    if (!service) throw new NotFoundException('Serviço não encontrado');

    try {
      await this.service.updateService(id, { ...serviceDto });
    } catch (error) {
      throw new InternalServerErrorException('Falhou ao atualizar serviço');
    }
  }

  async deleteService(id: string): Promise<void> {
    const service = await this.service.findServiceById(id);
    if (!service) throw new NotFoundException('Serviço não encontrado');

    try {
      await this.service.deleteService(id);
    } catch (error) {
      throw new InternalServerErrorException('Falhou ao apagar serviço');
    }
  }
}
