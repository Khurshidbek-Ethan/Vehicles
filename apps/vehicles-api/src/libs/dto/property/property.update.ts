import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { ObjectId } from 'mongoose';
import {
	PropertyBrand,
	PropertyColor,
	PropertyLocation,
	PropertyStatus,
	PropertyType,
} from '../../enums/property.enum';

@InputType()
export class PropertyUpdate {
	// aynan qaysi propertyni yangilamoqchimiz
	@IsNotEmpty()
	@Field(() => String)
	_id: ObjectId;

	@IsOptional()
	@Field(() => PropertyType, { nullable: true })
	propertyType?: PropertyType;

	@IsOptional()
	@Field(() => PropertyStatus, { nullable: true })
	propertyStatus?: PropertyStatus;

	@IsOptional()
	@Field(() => PropertyLocation, { nullable: true })
	propertyLocation?: PropertyLocation;

	@IsOptional()
	@Field(() => PropertyBrand, { nullable: true })
	propertyBrand?: PropertyBrand;

	@IsOptional()
	@Field(() => PropertyColor, { nullable: true })
	propertyColor?: PropertyColor;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	propertyAddress?: string;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	propertyTitle?: string;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	propertyPrice?: number;

	@IsOptional()
	@Field(() => [String], { nullable: true })
	propertyImages?: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	soldAt?: Date;

	deletedAt?: Date;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;
}
