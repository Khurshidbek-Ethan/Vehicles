import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	SEDAN = 'SEDAN',
	ECAR = 'ECAR',
	SUV = 'SUV',
	COMMERCIAL = 'COMMERCIAL',
	COUPLE = 'COUPLE',
	OTHER = 'OTHER',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});

export enum PropertyBrand {
	HYUNDAI = 'HYUNDAI',
	KIA = 'KIA',
	GENESIS = 'GENESIS',
	BMW = 'BMW',
	MERCEDES = 'MERCEDES',
	AUDI = 'AUDI',
}
registerEnumType(PropertyBrand, {
	name: 'PropertyBrand',
});

export enum PropertyColor {
	WHITE = 'WHITE',
	BLACK = 'BLACK',
	GREY = 'GREY',
	CHARCOAL = 'CHARCOAL',
	BLUE = 'BLUE',
	SILVER = 'SILVER',
	BROWN = 'BROWN',
	ORANGE = 'ORANGE',
}
registerEnumType(PropertyColor, {
	name: 'PropertyColor',
});
