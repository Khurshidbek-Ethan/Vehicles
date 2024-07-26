import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Schema } from 'mongoose';
import { Notific } from '../../libs/dto/notification/notific';
import { NotificInput, NotificInquiry } from '../../libs/dto/notification/notific.input';
import { Direction, Message } from '../../libs/enums/common.enum';
import { T } from '../../libs/types/common';
import { NotificationUpdate } from '../../libs/dto/notification/notific.update';
import { Member } from '../../libs/dto/member/member';
import { lookupMemberNotification } from '../../libs/config';

@Injectable()
export class NotificationService {
	constructor(@InjectModel('Notification') private readonly notificationModel: Model<Notific>) {}

	public async createNotification(input: NotificInput): Promise<Notific> {
		try {
			const result = await this.notificationModel.create(input);
			return result;
		} catch (err) {
			console.log('Error, createNotification', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}

// 	public async getNotification(authorId: ObjectId, notificationId: ObjectId): Promise<Notific> {
// 		const search: T = {
// 			_id: notificationId,
// 		};

// 		const targetNotification: Notific = await this.notificationModel.findOne(search).lean().exec();
// 		if (!targetNotification) throw new InternalServerErrorException(Message.NO_DATA_FOUND);
// 		return targetNotification;
// 	}

// 	public async updateNotification(authorId: ObjectId, input: NotificationUpdate): Promise<Notific> {
// 		const { _id } = input;
// 		const result = await this.notificationModel.findOneAndUpdate({ _id: _id }, input, { new: true }).exec();
// 		if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILED);
// 		return result;
// 	}

// 	public async getNotifications(memberId: ObjectId, input: NotificInquiry): Promise<Notification> {
// 		const { receiverId } = input.search;
// 		const match: T = { receiverId: memberId };
// 		const sort: T = { ['updatedAt']: input?.direction ?? Direction.DESC };

// 		console.log('match', match);
// 		console.log('sort', sort);

// 		const result = await this.notificationModel
// 			.aggregate([
// 				{ $match: match },
// 				{ $sort: sort },
// 				{
// 					$facet: {
// 						list: [
// 							{ $skip: (input.page - 1) * input.limit },
// 							{ $limit: input.limit },
// 							lookupMemberNotification,
// 							{ $unwind: '@memberData' },
// 						],
// 						metaCounter: [{ $count: 'total' }],
// 					},
// 				},
// 			])
// 			.exec();
// 		if (!result.length) throw new InternalServerErrorException(Message.NO_DATA_FOUND);
// 		return result[0];
// 	}
}
