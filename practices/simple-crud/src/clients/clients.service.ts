import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { log } from 'node:console';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class ClientsService {
  clients: CreateClientDto[] = [
    {
      //id: '',
      name: 'angie',
      lasttname: 'castillo',
      age: 30,
      email: 'evi@gmail.com',
      state: false,
    },
  ];

  create(createClientDto: CreateClientDto) {
    this.clients.push(createClientDto);
    return createClientDto;
  }

  findAll() {
    return this.clients;
  }

  findOne(name: string) {
    name = name.toLowerCase();
    console.log('name  ', name);
    const clientFound = this.clients.find((client) => client.name === name);
    if (!clientFound)
      throw new NotFoundException(`Client with name "${name}" not found`);
    return clientFound;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
