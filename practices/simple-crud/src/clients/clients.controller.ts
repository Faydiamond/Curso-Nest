import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'prisma.service';
import { log } from 'node:console';

@Controller('clients')
export class ClientsController {
  constructor(private prismaService: PrismaService) {}

  async clientExists(id: string): Promise<void> {
    const client = await this.prismaService.clients.findUnique({
      where: { id: id },
    });

    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
  }

  @Get()
  findAll() {
    return this.prismaService.clients.findMany();
  }

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.prismaService.clients.create({ data: createClientDto });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    try {
      this.clientExists(id);
      const updatedClient = await this.prismaService.clients.update({
        where: { id: id },
        data: updateClientDto,
      });

      return updatedClient;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      this.clientExists(id);

      const deletedClient = await this.prismaService.clients.delete({
        where: { id: id },
      });

      console.log('Deleted:  ', deletedClient);
      return 'Cliente eliminado';
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
      throw error;
    }
  }
}
