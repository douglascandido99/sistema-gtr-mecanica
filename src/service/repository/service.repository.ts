import { Injectable } from '@nestjs/common';
import { Prisma, Service } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class ServiceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createService(data: Prisma.ServiceCreateInput): Promise<Service> {
    return await this.prisma.service.create({
      data,
    });
  }

  async findServiceById(id: string): Promise<Service> {
    return await this.prisma.service.findFirst({
      where: {
        id,
      },
    });
  }

  async findServiceByCarPlate(carPlate: string): Promise<Service[]> {
    return await this.prisma.service.findMany({
      where: {
        carPlate,
      },
    });
  }

  async findServiceByCarModel(carModel: string): Promise<Service[]> {
    return await this.prisma.service.findMany({
      where: {
        carModel,
      },
      orderBy: {
        entryDate: 'desc',
      },
    });
  }

  async updateService(
    id: string,
    data: Prisma.ServiceUpdateInput,
  ): Promise<void> {
    await this.prisma.service.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteService(id: string): Promise<void> {
    await this.prisma.service.delete({
      where: {
        id,
      },
    });
  }
}
