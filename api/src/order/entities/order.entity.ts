import { ApiProperty } from '@nestjs/swagger';
import { Pasta } from 'src/pasta/entities/pasta.entity';
import { Pizza } from 'src/pizza/entities/pizza.entity';
import { Salat } from 'src/salat/entities/salat.entity';
import { Schnitzel } from 'src/schnitzel/entities/schnitzel.entity';
import { Snack } from 'src/snacks/entities/snack.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Order {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @ApiProperty()
  @Column('text', { name: 'name', nullable: true })
  name: string | null;

  @ApiProperty()
  @Column('text', { name: 'customerAddress', nullable: true })
  customerAddress: string | null;

  @ApiProperty()
  @Column('double precision', { name: 'totalprice', nullable: true, default: 0 })
  totalprice: number | null;

  @ApiProperty()
  @Column('text', { name: 'paymentState', nullable: true, default: 'pending' })
  paymentState: string | null | any;

  @ApiProperty()
  @Column('boolean', { name: 'isDelivered', nullable: true, default: false })
  isDelivered: boolean | null;

  @ApiProperty()
  @Column('double precision', { name: 'quantity', nullable: true, default: 0 })
  quantity: number | null;

  @ApiProperty()
  @Column('boolean', { name: 'isdeleted', nullable: true, default: false })
  isDeleted: boolean | null;

  @ApiProperty()
  @Column('timestamp with time zone', { name: 'createdat', nullable: true })
  createdAt: Date | null;

  @ApiProperty()
  @Column('integer', { name: 'createdby', nullable: true })
  createdBy: number | null;

  @ApiProperty()
  @Column('timestamp with time zone', { name: 'updatedat', nullable: true })
  updatedAt: Date | null;

  @ApiProperty()
  @Column('integer', { name: 'updatedby', nullable: true })
  updatedBy: number | null;

  @ApiProperty({ type: () => [Pasta] })
  @OneToMany(() => Pasta, pasta => pasta.order)
  pasta: Pasta[];


  @ApiProperty({ type: () => Pizza, isArray: true })
  @OneToMany(() => Pizza, pizza => pizza.order)
  pizzas: Pizza[];


  @ApiProperty({ type: () => [Snack] })
  @OneToMany(() => Snack, snack => snack.order)
  snacks: Snack[];


  @ApiProperty()
  @ManyToOne(() => Salat, { eager: true })
  salad: Salat;

  @ApiProperty()
  @ManyToOne(() => Schnitzel, { eager: true })
  schnitzel: Schnitzel;
}
