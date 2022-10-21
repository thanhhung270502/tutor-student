import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    userName: string;

    @Column()
    password: string;

    // @Column()
    // fullName: string;

    // @Column()
    // email: string;
}