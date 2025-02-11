import { JwtService } from '@nestjs/jwt';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { MessagesWsService } from './messages-ws.service';
@WebSocketGateway({ cors: true })
export class MessagesWsGateway {
  //messagegateway viene haver como el control
  constructor(private readonly messagesWsService: MessagesWsService) {}
}
