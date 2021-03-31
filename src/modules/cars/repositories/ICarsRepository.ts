import { ICreateCarsDTO } from '@cars/dtos/ICreateCarsDTO';
import { Car } from '@cars/infra/typeorm/entities/Car';

interface ICarsRepository{
  create(data: ICreateCarsDTO): Promise<Car>
  findByLicensePlate(license_plate: string): Promise<Car>
  findAvailable(
    brand?:string,
    category_id?:string,
    name?:string
  ):Promise<Car[]>
}

export { ICarsRepository };
