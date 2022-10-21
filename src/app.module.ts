import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username: 'tutor_student',
      password: 'password123',
      database: 'tutor_student_db',
      synchronize: true,
    }),
    UsersModule
  ],
})
export class AppModule {}
