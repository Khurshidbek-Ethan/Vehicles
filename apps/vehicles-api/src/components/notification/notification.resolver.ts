import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { NotificationService } from './notification.service';
import { UseGuards } from '@nestjs/common';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { Notific } from '../../libs/dto/notification/notific';
import { WithoutGuard } from '../auth/guards/without.guard';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { NotificationUpdate } from '../../libs/dto/notification/notific.update';
import { NotificInquiry } from '../../libs/dto/notification/notific.input';

@Resolver()
export class NotificationResolver {
	constructor(private readonly notificationService: NotificationService) {}


	@UseGuards(WithoutGuard)
	@Query((returns) => Notific)
	public async getNofication(
		@Args('notificationId') input: string,
		@AuthMember('_id') authorId: ObjectId,
	): Promise<Notific> {
		console.log('Query: getNotification');
		const notificationId = shapeIntoMongoObjectId(input);

		return await this.notificationService.getNotification(authorId, notificationId);
	}


	@UseGuards(WithoutGuard)
	@Mutation(() => Notific)
	public async updateNotification(
		@Args('input') input: NotificationUpdate,
		@AuthMember('_id') authorId: ObjectId,
	): Promise<Notific> {
		console.log('Mutation:updateNotification');
		input._id = shapeIntoMongoObjectId(input._id);

		return await this.notificationService.updateNotification(authorId, input);
	}


	@UseGuards(WithoutGuard)
	@Query(() => Notification)
	public async getNotifications(
		@Args('input') input: NotificInquiry,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Notification> {
		console.log('Query:getNotifications');
		return await this.notificationService.getNotifications(memberId, input);
	}
}
