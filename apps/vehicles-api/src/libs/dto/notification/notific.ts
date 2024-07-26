import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { NotificationGroup, NotificationStatus, NotificationType } from '../../enums/notification.enum';
import { ObjectId } from 'mongoose';
import { Member, TotalCounter } from '../member/member';

@InputType()
export class Notific {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => NotificationType, { nullable: true })
	notificationType: NotificationType.COMMENT;

	@IsNotEmpty()
	@Field(() => NotificationGroup, { nullable: true })
	notificationGroup: NotificationGroup;

	@IsNotEmpty()
	@Field(() => NotificationStatus, { nullable: true })
	notificationStatus: NotificationStatus;

	@Field(() => String)
	notificationTitle: string;

	@Field(() => String)
	notificationDesc: string;

	authorId: ObjectId;

	receiverId: ObjectId;

	@IsOptional()
	@Field(() => String, { nullable: true })
	propertyId?: ObjectId;

	@IsOptional()
	@Field(() => String, { nullable: true })
	articleId?: ObjectId;

	memberId: ObjectId;

	@IsOptional()
	@Field(() => Member, { nullable: true })
	memberData?: Member;
}

@ObjectType()
export class Notification {
	@Field(() => [Notific])
	list: Notific[];

	@Field(() => [TotalCounter], { nullable: true })
	metaCounter: TotalCounter[];
}
