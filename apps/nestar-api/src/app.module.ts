import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { T } from './libs/types/common';
import { SocketModule } from './socket/socket.module';

@Module({
	imports: [
		// boshqa module lar import orqali kirib keladi va export qilamiz
		// ConfigModule = .env ni ichidagi datalarni olib beryapti
		ConfigModule.forRoot(),
		// By default bizni server REST API va biz uni GraphQl ga GraphQL module orqali ozgartiryapmiz
		GraphQLModule.forRoot({
			//ApolloDriver like adapter
			driver: ApolloDriver,
			// playground = for testing purposes
			playground: true,
			uploads: false,
			// if enabled, GraphQL schema will be generated automatically
			autoSchemaFile: true,
			formatError: (error: T) => {
				const graphQLFormattedError = {
					code: error?.extensions.code,
					message:
						error?.extensions?.exception?.response?.message || error?.extensions?.response?.message || error?.message,
				};
				console.log('GRAPHQL GLOBAL ERROR:', graphQLFormattedError);
				return graphQLFormattedError;
			},
		}),
		ComponentsModule, // HTTP orqali
		DatabaseModule,
		SocketModule, // TCP orqali

	],
	controllers: [AppController], //HTTP
	providers: [AppService, AppResolver],
})
export class AppModule {}
