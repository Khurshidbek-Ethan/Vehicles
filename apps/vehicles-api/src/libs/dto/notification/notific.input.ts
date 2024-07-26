import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Min } from 'class-validator';
import { Direction } from '../../enums/common.enum';
import { ObjectId } from 'mongoose';
import { NotificationGroup, NotificationStatus, NotificationType } from '../../enums/notification.enum';

@InputType()
export class NotificInput {
	@IsOptional()
	@Field(() => NotificationType)
	notificationType: NotificationType;

	@IsOptional()
	@Field(() => NotificationStatus)
	notificationStatus: NotificationStatus;

	@IsOptional()
	@Field(() => NotificationGroup)
	notificationGroup: NotificationGroup;

	@IsOptional()
	@Field(() => String)
	notificationTitle: string;

	@IsOptional()
	@Field(() => String)
	notificationDesc: string;

	authorId: ObjectId;

	receiverId: ObjectId;

	propertyId?: ObjectId;

	articleId?: ObjectId;
}

@InputType()
class NISearch {
	@IsNotEmpty()
	@Field(() => String)
	receiverId: ObjectId;
}

@InputType()
export class NotificInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => Int)
	search: NISearch;
}
