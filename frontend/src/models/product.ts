interface IProductModel {
  id: string,
  name: string,
  description: string,
  photoUrl: string,
  value: number,
  discountPercentage: number,
  freightValue: number,
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date
}