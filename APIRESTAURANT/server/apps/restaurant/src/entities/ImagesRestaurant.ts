import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Restaurant } from "./Restaurant";

<<<<<<< HEAD
@Index("PK__ImagesRe__71CCA00E77CF4EF5", ["idImagesRestaurant"], {
=======
@Index("PK__ImagesRe__71CCA00EEBE48854", ["idImagesRestaurant"], {
>>>>>>> 03ff1f6a5ab88d9ab820c6f404b0e7996de8792a
  unique: true,
})
@Entity("ImagesRestaurant", { schema: "dbo" })
export class ImagesRestaurant {
  @Column("varchar", { primary: true, name: "idImagesRestaurant", length: 255 })
  idImagesRestaurant: string;

  @Column("ntext", { name: "urlRestaurant" })
  urlRestaurant: string;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "getdate()",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updatedAt",
    nullable: true,
    default: () => "getdate()",
  })
  updatedAt: Date | null;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.imagesRestaurants)
  @JoinColumn([{ name: "idRestaurant", referencedColumnName: "idRestaurant" }])
  idRestaurant: Restaurant;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.imagesRestaurants2)
  @JoinColumn([{ name: "idRestaurant", referencedColumnName: "idRestaurant" }])
  idRestaurant2: Restaurant;
}
