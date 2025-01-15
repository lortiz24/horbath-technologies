import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true, default: '' })
  description?: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  quantity: number;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;
}
